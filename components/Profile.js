import Image from 'next/image';

const Profile = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Image
        src="/foto-perfil2.jpg"
        alt="Foto de Carlos Nascimento"
        width={150}
        height={150}
        style={{ borderRadius: '50%' }}
      />
      <h1 style={{ marginTop: '16px' }}>Carlos Nascimento</h1>
      <p style={{ maxWidth: '600px', margin: '8px auto' }}>
        Olá, me chamo Carlos Nascimento, sou de Recife-PE. Sou Bacharel em Enfermagem e atualmente graduando do 3º período em Sistemas para Internet, na Universidade Católica de Pernambuco. 
        Sou apaixonado por pesquisa científica, saúde e tecnologia. Pretendo aprofundar meus conhecimentos em Análise de Dados, Bioinformática e Bioestatística. 
        Fique à vontade para entrar em contato comigo!
      </p>
    </div>
  );
};

export default Profile;