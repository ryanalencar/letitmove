import styled from 'styled-components'

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;

  & > img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  }

  div {
    margin-left: 1.5rem;

    strong {
      font-size: 1.5rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.title};
    }

    p {
      font-size: 1rem;
      margin-top: 0.5rem;
    }
  }
`

function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/ryanalencar.png" alt="Imagem de Perfil" />
      <div>
        <strong>Ryan Alencar</strong>
        <p>Level 1</p>
      </div>
    </ProfileContainer>
  )
}

export default Profile
