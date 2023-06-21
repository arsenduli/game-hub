import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

interface Proops {
    onSelectSortOrders: (sortOrders: string) => void;
    SelectSortOrders: string,
}

const SortSelector = ({ onSelectSortOrders, SelectSortOrders }: Proops) => {
    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average rating' },
    ];

    const selecetOrder = sortOrders.find(order => order.value === SelectSortOrders)
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selecetOrder?.label || 'Relevance'}</MenuButton>
            <MenuList>
                {sortOrders.map(iteme => <MenuItem onClick={() => onSelectSortOrders(iteme.value)} key={iteme.value} value={iteme.value}>{iteme.label}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default SortSelector