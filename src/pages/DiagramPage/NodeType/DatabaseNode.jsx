import { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { DBComponent } from './DBComponent';
const DatabaseNode = ({ data }) => {
  const atributos=data.atributos;
  const tipos=data.tipos;
  const primaryKey=data.primaryKey;
  return (
    <>

      <div className='grid grid-rows text-center'>
        <div className='py-1'>{data.label}</div>
        <div className='px-1 bg-black'>          
          <DBComponent atributos={atributos} tipos={tipos} primaryKey={primaryKey} />
        </div>
      </div>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />

    </>
  );
};

export default memo(DatabaseNode);