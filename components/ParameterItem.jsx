import React from 'react';
import { ChevronRightIcon } from 'lucide-react';

const ParameterItem = ({ param, openSections, setOpenSections, rotations, setRotations, level = 0, isLast = false }) => {
  const hasChildren = Array.isArray(param.children) && param.children.length > 0;

  const handleClick = (key) => {
    setRotations((prev) => ({
      ...prev,
      [key]: prev[key] ? '' : 'rotate-90',
    }));
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Estilo para el div principal
  let mainClass = '';
  if (level === 0) {
    mainClass = isLast ? 'pt-4' : hasChildren ? 'border-b-2 py-4' : 'border-b-2 py-4';
  } else {
    mainClass = isLast ? 'pt-4 pl-4' : 'py-4 pl-4 border-b-2';
  }

  return (
    <div className={mainClass}>
      <div
        onClick={() => handleClick(param.key)}
        className='flex flex-row gap-2 items-center cursor-pointer'
        style={{ marginLeft: level > 1 ? (level - 1) * 16 : 0 }}
      >
        <ChevronRightIcon className={`text-[#536374] cursor-pointer transition-transform duration-150 ${rotations[param.key]}`} />
        <p className='font-semibold'>
          {param.label} <span className='font-cabin text-[#8D9298] font-normal'>{param.type}</span>
        </p>
      </div>
      {openSections[param.key] && (
        <div className='py-3'>
          {param.description && (
            <p className='py-2'>
              <span className='font-semibold not-italic font-cabin'>Description:</span> {param.description}
            </p>
          )}
          {param.requirement && (
            <p className='py-2'>
              <span className='font-semibold not-italic font-cabin'>Requirement:</span> {param.requirement}
            </p>
          )}
          {param.length && (
            <p className='py-2'>
              <span className='font-semibold not-italic font-cabin'>Field Length:</span> {param.length}
            </p>
          )}
          {hasChildren && (
            <div>
              {param.children.map((child, idx) => (
                <ParameterItem
                  key={child.key}
                  param={child}
                  openSections={openSections}
                  setOpenSections={setOpenSections}
                  rotations={rotations}
                  setRotations={setRotations}
                  level={level + 1}
                  isLast={idx === param.children.length - 1}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ParameterItem; 