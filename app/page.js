import Profile from '../components/Profile';

export default function HomePage() {
  return (
    <main style={{ fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <h2>Site criado para a disciplina Programação Front-End</h2>
      <hr style={{ width: '50%', margin: '24px 0' }} />
      <Profile />
    </main>
  );
}