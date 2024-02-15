import React from 'react';

import InternalPageLayoutV1 from '@/components/layouts/InternalPageLayout';

export const metadata = {
  title: 'Apply | Log In',
};

/**
 * Interviews page
 * @return {React.Component}
 */
export default function Interviews() {
  return (
    <InternalPageLayoutV1>
      <div className='flex items-center justify-center h-screen'>
        <h1>Interviews</h1>
      </div>
    </InternalPageLayoutV1>
  );
}
