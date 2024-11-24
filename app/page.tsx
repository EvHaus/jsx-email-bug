'use client';

import { useActionState } from 'react';
import {action} from './action';

export default function Home() {
  const [response, formAction] = useActionState(action, null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={formAction}>Nothing here</form>
    </main>
  );
}
