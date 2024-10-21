'use client';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Check, ChevronDown, User } from 'lucide-react';

interface ComboboxProps {
    selectedItem: string;
    setSelectedItem: (client: string) => void;
    data: { id: string; name: string }[];
    label: string;
}

export function Combobox({ selectedItem, setSelectedItem, data, label }: ComboboxProps) {
    const [open, setOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const filteredClients = data.filter((client) => client.name.toLowerCase().includes(searchValue.toLowerCase()));

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant='outline' role='combobox' aria-expanded={open} className='w-full md:w-[400px] justify-between text-xs text-gray-600 shadow-md'>
                    <div className='flex flex-row items-center'>
                        <User className='mr-2 text-gray-400' />
                        {selectedItem === 'all'
                            ? 'Todos'
                            : selectedItem
                            ? data.find((client) => client.name === selectedItem)?.name
                            : `Selecione um ${label}...`}
                    </div>
                    <ChevronDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                </Button>
            </PopoverTrigger>
            <PopoverContent className='w-full md:w-[400px] p-0'>
                <Command>
                    <CommandInput placeholder='Buscar cliente...' value={searchValue} onValueChange={setSearchValue} />
                    <CommandList>
                        <CommandEmpty className='text-xs p-2 text-gray-600'>Nenhum {label} encontrado.</CommandEmpty>
                        <CommandGroup>
                            <CommandItem
                                key='all'
                                value='all'
                                onSelect={() => {
                                    setSelectedItem('all');
                                    setOpen(false);
                                }}
                            >
                                <Check className={cn('mr-2 h-4 w-4', selectedItem === 'all' ? 'opacity-100' : 'opacity-0')} />
                                <p className='text-xs text-gray-600'>Todos</p>
                            </CommandItem>
                            {filteredClients.map((client) => (
                                <CommandItem
                                    key={client.id}
                                    value={client.name}
                                    onSelect={() => {
                                        setSelectedItem(client.name);
                                        setOpen(false);
                                    }}
                                >
                                    <Check className={cn('mr-2 h-4 w-4', selectedItem === client.name ? 'opacity-100' : 'opacity-0')} />
                                    <p className='text-xs uppercase text-gray-600'>{client.name}</p>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
