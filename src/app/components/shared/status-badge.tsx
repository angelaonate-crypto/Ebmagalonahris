interface StatusBadgeProps {
  status: string;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const getStatusStyle = (status: string) => {
    const normalizedStatus = status.toLowerCase();
    
    // Green statuses
    if (['approved', 'active', 'present', 'completed', 'qualified', 'generated', 'available', 'open'].includes(normalizedStatus)) {
      return 'bg-green-100 text-green-700';
    }
    
    // Yellow/Amber statuses
    if (['pending', 'late', 'in progress', 'for review', 'in review', 'pending evaluation'].includes(normalizedStatus)) {
      return 'bg-[#FFF8E1] text-[#C62828]';
    }
    
    // Red statuses
    if (['rejected', 'absent', 'not qualified', 'overdue', 'closed', 'resigned'].includes(normalizedStatus)) {
      return 'bg-red-100 text-red-700';
    }
    
    // Gray (default)
    return 'bg-gray-100 text-gray-700';
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs ${getStatusStyle(status)}`}>
      {status}
    </span>
  );
}