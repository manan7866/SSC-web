import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/s-card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/s-tabs";
import { Calendar, Clock, MapPin, Star, MessageSquare, User, Briefcase, Building, FileText, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";

const formatDate = (dateString: string) => {
  try {
    return format(new Date(dateString), 'MMM dd, yyyy');
  } catch {
    return dateString;
  }
};

const getStatusBadgeVariant = (status: number) => {
  switch(status) {
    case 1: return "default"; // completed
    case 2: return "destructive"; // cancelled
    default: return "secondary"; // pending
  }
};

const getStatusIcon = (status: number) => {
  switch(status) {
    case 1: return <CheckCircle className="h-4 w-4 text-green-500" />; // completed
    case 2: return <XCircle className="h-4 w-4 text-red-500" />; // cancelled
    default: return <AlertCircle className="h-4 w-4 text-yellow-500" />; // pending
  }
};

const getStatusText = (status: number) => {
  switch(status) {
    case 1: return "Completed";
    case 2: return "Cancelled";
    default: return "Pending";
  }
};

export default function ServicesSection() {
  const authContext = useAuth();
  
  const { user, loading } = {
    user: authContext.user,
    loading: authContext.loading
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-96 w-full" />
      </div>
    );
  }

  if (!user) {
    return (
      <Card>
        <CardContent className="p-6 text-center text-muted-foreground">
          Please log in to view your services.
        </CardContent>
      </Card>
    );
  }

  const { forms } = user;

  // Count filled forms
  const filledFormsCount = [
    forms.membership ? 1 : 0,
    forms.donations.length > 0 ? 1 : 0,
    forms.reviews.length > 0 ? 1 : 0,
    forms.bookedServices.length > 0 ? 1 : 0,
    forms.interviews.length > 0 ? 1 : 0,
    forms.conferences.length > 0 ? 1 : 0,
    forms.sufiChecklist ? 1 : 0
  ].reduce((sum, count) => sum + count, 0);

  if (filledFormsCount === 0) {
    return (
      <Card>
        <CardContent className="p-6 text-center text-muted-foreground">
          You haven't submitted any forms yet. Fill out forms to see them appear here.
        </CardContent>
      </Card>
    );
  }

  return (
    <Tabs defaultValue="booked-services" className="w-full">
      <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7">
        {forms.bookedServices.length > 0 && (
          <TabsTrigger value="booked-services" className="focus-visible:ring-0">
            Booked Services
          </TabsTrigger>
        )}
        {forms.interviews.length > 0 && (
          <TabsTrigger value="interviews" className="focus-visible:ring-0">
            Interviews
          </TabsTrigger>
        )}
        {forms.conferences.length > 0 && (
          <TabsTrigger value="conferences" className="focus-visible:ring-0">
            Conferences
          </TabsTrigger>
        )}
        {forms.donations.length > 0 && (
          <TabsTrigger value="donations" className="focus-visible:ring-0">
            Donations
          </TabsTrigger>
        )}
        {forms.reviews.length > 0 && (
          <TabsTrigger value="reviews" className="focus-visible:ring-0">
            Reviews
          </TabsTrigger>
        )}
        {forms.membership && (
          <TabsTrigger value="membership" className="focus-visible:ring-0">
            Membership
          </TabsTrigger>
        )}
        {forms.sufiChecklist && (
          <TabsTrigger value="sufi-checklist" className="focus-visible:ring-0">
            Sufi Checklist
          </TabsTrigger>
        )}
      </TabsList>

      {/* Booked Services Tab */}
      {forms.bookedServices.length > 0 && (
        <TabsContent value="booked-services" className="mt-4">
          <div className="space-y-4">
            {forms.bookedServices.map((service) => (
              <Card key={service.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{service.subject}</CardTitle>
                    <Badge variant={getStatusBadgeVariant(service.status)}>
                      <div className="flex items-center gap-1">
                        {getStatusIcon(service.status)}
                        {getStatusText(service.status)}
                      </div>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{service.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{service.service}</span>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-muted-foreground">Comment:</p>
                      <p className="text-sm">{service.comment || 'No comment provided'}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Submitted: {formatDate(service.createdAt)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      )}

      {/* Interviews Tab */}
      {forms.interviews.length > 0 && (
        <TabsContent value="interviews" className="mt-4">
          <div className="space-y-4">
            {forms.interviews.map((interview) => (
              <Card key={interview.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{interview.profession}</CardTitle>
                    <Badge variant={getStatusBadgeVariant(interview.status)}>
                      <div className="flex items-center gap-1">
                        {getStatusIcon(interview.status)}
                        {getStatusText(interview.status)}
                      </div>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Building className="h-4 w-4" />
                      <span>{interview.institution || 'Institution not specified'}</span>
                    </div>
                    {interview.website && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>Website: {interview.website}</span>
                      </div>
                    )}
                    <div>
                      <p className="text-sm text-muted-foreground">Areas of Impact:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {interview.areasOfImpact.map((area, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {area.replace(/_/g, ' ')}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    {interview.spiritualOrientation && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        <span>Spiritual Orientation: {interview.spiritualOrientation}</span>
                      </div>
                    )}
                    {!interview.spiritualOrientation && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        <span>Spiritual Orientation: Not specified</span>
                      </div>
                    )}
                    <div>
                      <p className="text-sm text-muted-foreground">Interview Intent:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {interview.interviewIntent.map((intent, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {intent.replace(/_/g, ' ')}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      {interview.additionalNotes && (
                        <>
                          <p className="text-sm text-muted-foreground">Additional Notes:</p>
                          <p className="text-sm">{interview.additionalNotes}</p>
                        </>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Scheduled: {formatDate(interview.scheduledAt)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Submitted: {formatDate(interview.createdAt)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      )}

      {/* Conferences Tab */}
      {forms.conferences.length > 0 && (
        <TabsContent value="conferences" className="mt-4">
          <div className="space-y-4">
            {forms.conferences.map((conference) => (
              <Card key={conference.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{conference.topic ? conference.topic.replace(/_/g, ' ') : 'Untitled Conference'}</CardTitle>
                    <Badge variant={getStatusBadgeVariant(conference.status)}>
                      <div className="flex items-center gap-1">
                        {getStatusIcon(conference.status)}
                        {getStatusText(conference.status)}
                      </div>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Building className="h-4 w-4" />
                      <span>{conference.institution}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <FileText className="h-4 w-4" />
                      <span>Presentation Type: {conference.presentationType || 'Not specified'}</span>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-muted-foreground">Abstract:</p>
                      <p className="text-sm">{conference.abstract || 'No abstract provided'}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Submitted: {formatDate(conference.createdAt)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      )}

      {/* Donations Tab */}
      {forms.donations.length > 0 && (
        <TabsContent value="donations" className="mt-4">
          <div className="space-y-4">
            {forms.donations.map((donation, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Donation #{index + 1}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-medium">Amount:</span>
                      <span>${donation.amount}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-medium">Type:</span>
                      <span>{donation.donorType}</span>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Donation Pool:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {donation.pool.map((pool, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {pool.replace(/_/g, ' ')}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Submitted: {formatDate(donation.createdAt)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      )}

      {/* Reviews Tab */}
      {forms.reviews.length > 0 && (
        <TabsContent value="reviews" className="mt-4">
          <div className="space-y-4">
            {forms.reviews.map((review, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">Review #{index + 1}</CardTitle>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                      <span className="ml-1 text-sm">({review.rating})</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Review:</p>
                      <p className="text-sm">{review.content || 'No review content provided'}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Submitted: {formatDate(review.createdAt)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      )}

      {/* Membership Tab */}
      {forms.membership && (
        <TabsContent value="membership" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Membership Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-medium">Phone:</span>
                  <span>{forms.membership.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-medium">Country:</span>
                  <span>{forms.membership.country}</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Role:</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {forms.membership.role.map((role, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {role.charAt(0).toUpperCase() + role.slice(1)}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Donor Type:</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {forms.membership.donorType.map((type, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Volunteer Support Areas:</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {forms.membership.volunteerSupport.map((support, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {support.replace(/_/g, ' ')}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-medium">Volunteer Mode:</span>
                  <span>{forms.membership.volunteerMode}</span>
                </div>
                {forms.membership.previousVolunteerExp && (
                  <div className="md:col-span-2">
                    <p className="text-sm text-muted-foreground">Previous Volunteer Experience:</p>
                    <p className="text-sm">{forms.membership.previousVolunteerExp}</p>
                  </div>
                )}
                {forms.membership.monthlyTime && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="font-medium">Monthly Time Commitment:</span>
                    <span>{forms.membership.monthlyTime}</span>
                  </div>
                )}
                {forms.membership.organization && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="font-medium">Organization:</span>
                    <span>{forms.membership.organization}</span>
                  </div>
                )}
                {forms.membership.intentCreation && (
                  <div className="md:col-span-2">
                    <p className="text-sm text-muted-foreground">Intent Creation:</p>
                    <p className="text-sm">{forms.membership.intentCreation}</p>
                  </div>
                )}
                {forms.membership.additionalInfo && (
                  <div className="md:col-span-2">
                    <p className="text-sm text-muted-foreground">Additional Information:</p>
                    <p className="text-sm">{forms.membership.additionalInfo}</p>
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-medium">Agreed to Principles:</span>
                  <span>{forms.membership.agreedToPrinciples ? 'Yes' : 'No'}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-medium">Consented to Updates:</span>
                  <span>{forms.membership.consentedToUpdates ? 'Yes' : 'No'}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Submitted: {formatDate(forms.membership.createdAt)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      )}

      {/* Sufi Checklist Tab */}
      {forms.sufiChecklist && (
        <TabsContent value="sufi-checklist" className="mt-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Sufi Checklist</CardTitle>
                <Badge variant="secondary">Progress: {forms.sufiChecklist.progress}%</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {forms.sufiChecklist.items.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="py-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.section.replace(/_/g, ' ')}</p>
                        </div>
                        <Badge variant={item.status === "COMPLETED" ? "default" : item.status === "SKIPPED" ? "secondary" : "destructive"}>
                          {item.status.replace(/_/g, ' ')}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Completed: {formatDate(item.createdAt)}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Started: {formatDate(forms.sufiChecklist.createdAt)}</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      )}
    </Tabs>
  );
}