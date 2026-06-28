import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container py-32">
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <Skeleton className="mx-auto h-6 w-32" />
        <Skeleton className="mx-auto h-12 w-3/4" />
        <Skeleton className="mx-auto h-12 w-2/3" />
        <Skeleton className="mx-auto h-4 w-1/2" />
        <div className="mt-8 flex justify-center gap-3">
          <Skeleton className="h-12 w-40 rounded-full" />
          <Skeleton className="h-12 w-40 rounded-full" />
        </div>
      </div>
    </div>
  );
}
