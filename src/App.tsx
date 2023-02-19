import { FC } from 'react'
import { Header } from './components/Header/Header';
import { LoginForm } from './components/LoginForm/LoginForm';

export const App: FC = (): JSX.Element => {

  return (
    <>
      <Header />
      <main >
        <LoginForm />
      </main>
    </>
  );
}
