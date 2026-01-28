import { useState, type FC } from 'react';
import { useCharacterStore } from '../../store/useCharacterStore';
import filterIcon from '../../assets/filter.png';

const HEALTH_FILTERS = ['Healthy', 'Injured', 'Critical'] as const;

const HealthFilterDropdown: FC = () => {
  const [open, setOpen] = useState(false);
  const active = useCharacterStore((s) => s.healthFilters);
  const toggle = useCharacterStore((s) => s.toggleHealthFilter);

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)}>
        <div className="w-6 h-6 -mb-1">
          <img src={filterIcon} alt="filter" className="object-fill" />
        </div>
      </button>
      {open && (
        <div className="absolute top-full -right-20 mt-2 bg-white border border-gray-300 rounded-md shadow-lg ">
          {HEALTH_FILTERS.map((health) => (
            <label key={health} className="flex items-center px-4 py-2 cursor-pointer">
              <input
                type="checkbox"
                checked={active.includes(health)}
                onChange={() => toggle(health)}
                className="mr-2"
              />
              {health}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default HealthFilterDropdown;
