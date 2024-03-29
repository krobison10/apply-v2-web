import React from 'react';

import InternalPageLayoutV1 from '@/components/layouts/InternalPageLayout';
import Homepage from '@/components/home/Homepage';

export const metadata = {
  title: 'Dashboard | Apply',
};

/**
 * Home page
 * @return {React.Component}
 */
export default function Home() {
  return (
    <InternalPageLayoutV1>
      <Homepage />
    </InternalPageLayoutV1>
  );
}
