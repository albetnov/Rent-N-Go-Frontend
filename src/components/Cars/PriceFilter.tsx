import FilterSelect from '../FilterSelect'

interface PriceFilterProps {
  onPriceChange: (price: number) => Promise<void>
}

export default function PriceFilter({ onPriceChange }: PriceFilterProps) {
  return (
    <FilterSelect
      placeholder="Price"
      onChange={async (e) => {
        await onPriceChange(parseInt(e.target.value))
      }}
    >
      <option value="10000000">&gt; 10000000</option>
      <option value="1500000">&gt; 1500000</option>
      <option value="0">All</option>
    </FilterSelect>
  )
}
