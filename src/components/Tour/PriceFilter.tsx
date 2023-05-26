import FilterSelect from '../FilterSelect'

interface PriceFilterProps {
  onPriceChange: (price: number) => Promise<void>
}

export default function PriceFilter({ onPriceChange }: PriceFilterProps) {
  return (
    <FilterSelect
      placeholder="Price"
      onChange={async (e) => {
        console.log('PriceFilter onChange called with value:', e.target.value)
        await onPriceChange(parseInt(e.target.value))
      }}
    >
      <option value="10000000"> 10000000</option>
      <option value="1500000"> 1500000</option>
      <option value="0">All</option>
    </FilterSelect>
  )
}
