import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import apiClient from "@/lib/apiClient";
import { useRouter } from "next/navigation";

type ReturnData = {
  reason: string;
  notes?: string;
};

export function useReturnModal(successCallback: () => void) {
  const [returnModalOpen, setReturnModalOpen] = useState(false);
  const [returnItemId, setReturnItemId] = useState<number | null>(null);
  const [returnForm, setReturnForm] = useState<ReturnData>({
    reason: "",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);

  // ✅ Open modal
  const openReturnModal = (itemId: number) => {
    setReturnItemId(itemId);
    setReturnForm({ reason: "", notes: "" });
    setReturnModalOpen(true);
  };

  // ✅ Validate and submit
  const submitReturn = async () => {
    if (!returnItemId) return;

    // 🧠 Validation
    if (!returnForm.reason.trim()) {
      toast.error("Please provide a reason for return.");
      return;
    }

    try {
      setSubmitting(true);

      const res = await apiClient.post(
        `/user/${returnItemId}/return`,
        returnForm
      );

      if (res.status) {
        toast.success("Return request submitted successfully.");
        setReturnModalOpen(false);
        successCallback();
      }
    } catch (error: any) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Unable to process return request."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const ReturnModal = (
    <Dialog open={returnModalOpen} onOpenChange={setReturnModalOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Return Order Item</DialogTitle>
          <p className="text-sm text-gray-500">
            Please provide a reason before returning this item.
          </p>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <div>
            <Label htmlFor="reason" className="text-sm font-medium">
              Reason <span className="text-red-500">*</span>
            </Label>
            <Input
              id="reason"
              placeholder="e.g. Received damaged product"
              value={returnForm.reason}
              onChange={(e) =>
                setReturnForm({ ...returnForm, reason: e.target.value })
              }
            />
          </div>

          <div>
            <Label htmlFor="notes" className="text-sm font-medium">
              Additional Notes (optional)
            </Label>
            <Textarea
              id="notes"
              placeholder="Any extra details..."
              value={returnForm.notes}
              onChange={(e) =>
                setReturnForm({ ...returnForm, notes: e.target.value })
              }
            />
          </div>
        </div>

        <DialogFooter className="flex justify-end space-x-2">
          <Button
            variant="outline"
            onClick={() => setReturnModalOpen(false)}
            disabled={submitting}
          >
            Close
          </Button>
          <Button
            variant="default"
            onClick={submitReturn}
            disabled={submitting}
            className="bg-fixnix-lightpurple hover:bg-fixnix-darkpurple"
          >
            {submitting ? "Submitting..." : "Confirm Return"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );

  return { openReturnModal, ReturnModal };
}
