import FilterSelect from '../FilterSelect'

export default function PriceFilter() {
  return (
    <FilterSelect placeholder="Price">
      <option value="option1">Mahal</option>
      <option value="option2">Biasa aja</option>
      <option value="option3">Secukupnya aja</option>
    </FilterSelect>
  )
}
