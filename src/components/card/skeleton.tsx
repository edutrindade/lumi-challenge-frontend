import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export const CardSkeleton = () => {
    return (
        <Card className='shadow-md border-transparent'>
            <CardHeader>
                <div className='flex items-center justify-between'>
                    <div className='flex flex-col justify-center'>
                        <Skeleton className='h-6 w-32 mb-2' />
                        <Skeleton className='h-4 w-48' />
                    </div>
                    <Skeleton className='ml-4 w-10 h-10 rounded-full' />
                </div>
            </CardHeader>

            <CardContent>
                <Skeleton className='h-8 w-24' />
                <Skeleton className='h-4 w-10 mt-2' />
            </CardContent>
        </Card>
    );
};
