import { Skeleton } from '@/components/ui/skeleton';

export const DataTableSkeleton = () => {
    return (
        <table className='min-w-full table-auto border-collapse border border-gray-200'>
            <thead>
                <tr className='bg-gray-300'>
                    <th className='px-4 py-2'>
                        <Skeleton className='h-4 w-32' />
                    </th>
                    <th className='px-4 py-2'>
                        <Skeleton className='h-4 w-20' />
                    </th>
                    <th className='px-4 py-2'>
                        <Skeleton className='h-4 w-20' />
                    </th>
                    <th className='px-4 py-2'>
                        <Skeleton className='h-4 w-40' />
                    </th>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <th key={index} className='px-4 py-2'>
                            <Skeleton className='h-4 w-12' />
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {Array.from({ length: 5 }).map((_, rowIndex) => (
                    <tr key={rowIndex} className={`${rowIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                        <td className='px-4 py-2'>
                            <Skeleton className='h-4 w-full' />
                        </td>
                        <td className='px-4 py-2'>
                            <Skeleton className='h-4 w-20' />
                        </td>
                        <td className='px-4 py-2'>
                            <Skeleton className='h-4 w-20' />
                        </td>
                        <td className='px-4 py-2'>
                            <Skeleton className='h-4 w-40' />
                        </td>
                        {Array.from({ length: 12 }).map((_, cellIndex) => (
                            <td key={cellIndex} className='px-4 py-2 text-center'>
                                <Skeleton className='h-5 w-5 mx-auto' />
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
