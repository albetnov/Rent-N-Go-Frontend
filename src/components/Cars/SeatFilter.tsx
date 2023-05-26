import FilterSelect from '../FilterSelect'

interface SeatFilterProps {
  onSeatChange: (seats: number) => Promise<void>
}

export default function SeatFilter({ onSeatChange }: SeatFilterProps) {
  return (
    <FilterSelect
      placeholder="Seat"
      onChange={async (e) => {
        await onSeatChange(parseInt(e.target.value))
      }}
    >
      <option value="6">6</option>
      <option value="4">4</option>
      <option value="2">2</option>
    </FilterSelect>
  )
}
