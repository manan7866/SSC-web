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

type CancelData = {
  reason: string;
  notes?: string;
};

export function useCancelModal(successCallback:()=> void) {
  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [cancelItemId, setCancelItemId] = useState<number | null>(null);
  const [cancelForm, setCancelForm] = useState<CancelData>({
    reason: "",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);

  // ✅ Open modal
  const openCancelModal = (itemId: number) => {
    setCancelItemId(itemId);
    setCancelForm({ reason: "", notes: "" });
    setCancelModalOpen(true);
  };

  // ✅ Validate and submit
  const submitCancel = async () => {
    if (!cancelItemId) return;

    // 🧠 Validation
    if (!cancelForm.reason.trim()) {
      toast.error("Please provide a reason for cancellation.");
      return;
    }

    try {
      setSubmitting(true);
      // Optionally call API
      const res = await apiClient.post(
        `/user/${cancelItemId}/cancel`,
        cancelForm
      );
      if (res.status) {
        toast.success("Order item cancelled successfully.");
        setCancelModalOpen(false);
        successCallback()
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error.response.data.message || "Unable to cancel order.");
    } finally {
      setSubmitting(false);
    }
  };

  const CancelModal = (
    <Dialog open={cancelModalOpen} onOpenChange={setCancelModalOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Cancel Order Item</DialogTitle>
          <p className="text-sm text-gray-500">
            Please provide a reason before cancelling this order item.
          </p>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <div>
            <Label htmlFor="reason" className="text-sm font-medium">
              Reason <span className="text-red-500">*</span>
            </Label>
            <Input
              id="reason"
              placeholder="e.g. Ordered by mistake"
              value={cancelForm.reason}
              onChange={(e) =>
                setCancelForm({ ...cancelForm, reason: e.target.value })
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
              value={cancelForm.notes}
              onChange={(e) =>
                setCancelForm({ ...cancelForm, notes: e.target.value })
              }
            />
          </div>
        </div>

        <DialogFooter className="flex justify-end space-x-2">
          <Button
            variant="outline"
            onClick={() => setCancelModalOpen(false)}
            disabled={submitting}
          >
            Close
          </Button>
          <Button
            variant="destructive"
            onClick={submitCancel}
            disabled={submitting}
          >
            {submitting ? "Cancelling..." : "Confirm Cancel"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );

  return { openCancelModal, CancelModal };
}
