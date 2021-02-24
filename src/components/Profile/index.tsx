import styled from 'styled-components'

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`

const ProfileImage = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
`

const ProfileDetails = styled.div`
  margin-left: 1.5rem;

  strong {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.title};
  }

  p {
    font-size: 1rem;
    margin-top: 0.5rem;

    img {
      margin-right: 0.5rem;
    }
  }
`

function Profile() {
  return (
    <ProfileContainer>
      <ProfileImage src="https://github.com/ryanalencar.png" alt="Imagem de Perfil" />
      <ProfileDetails>
        <strong>Ryan Alencar</strong>
        <p>
          <img src="icons/level.svg" alt="Ícone level" />
          Level 1
        </p>
      </ProfileDetails>
    </ProfileContainer>
  )
}

export default Profile
