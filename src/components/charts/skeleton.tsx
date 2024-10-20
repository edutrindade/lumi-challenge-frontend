import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export const CardWithChartSkeleton = () => {
    return (
        <Card className='w-full md:w-1/2 md:max-w-[600px] shadow-md border-transparent'>
            <CardHeader>
                <div className='flex items-center justify-center'>
                    <Skeleton className='h-6 w-48' />
                    <Skeleton className='ml-auto w-8 h-8 rounded-full' />
                </div>
                <Skeleton className='h-4 w-80 mt-2' />
            </CardHeader>

            <CardContent>
                <Skeleton className='min-h-[200px] w-full' />
            </CardContent>
        </Card>
    );
};
