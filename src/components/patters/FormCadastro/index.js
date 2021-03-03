import React from 'react';
import { Lottie } from '@crello/react-lottie';
import { Button } from '../../commons/Button';
import TextField from '../../forms/TextField';
import errorAnimation from './animations/error.json';
import loadingAnimation from './animations/loading.json';
import successAnimation from './animations/success.json';
import { Box } from '../../foundation/Box';
import { Grid } from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',

};
function FormContent() {
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [submissionSatus, setSubmissionSatus] = React.useState(formStates.DEFAULT);
  const [userInfo, setUserInfo] = React.useState({
    nome: 'Reginaldo',
    usuario: 'regisbaldo',
  });

  function handleChange(e) {
    const input = e.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [input]: e.target.value,
    });
  }
  const isFormInvalid = userInfo.nome.length === 0 || userInfo.usuario.length === 0;

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      setIsFormSubmited(true);
      setSubmissionSatus(formStates.LOADING);

      const userDTO = {
        name: userInfo.nome,
        username: userInfo.usuario,
      };
      fetch('https://instalura-api.vercel.app/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDTO),
      })
        .then((respostaDoServidor) => respostaDoServidor.json())
        .then(() => {
          setSubmissionSatus(formStates.DONE);
        })
        .catch(() => {
          setSubmissionSatus(formStates.ERROR);
        });
    }}
    >
      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
      >
        Pronto para saber da vida dos outros?
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber tudoo que está
        rolando no bairro, complete seu cadastro agora!
      </Text>

      <div>
        <TextField
          placeholder="Nome"
          name="nome"
          value={userInfo.nome}
          onChange={handleChange} // capturadores, pegadores de ação
        />
      </div>

      <div>
        <TextField
          placeholder="Usuário"
          name="usuario"
          value={userInfo.usuario}
          onChange={handleChange}
        />
      </div>

      <Button
        variant="primary.main"
        type="submit"
        disabled={isFormInvalid}
        fullWidth
      >
        Cadastrar
      </Button>
      <Box
        display="flex"
        justifyContent="center"
      >

        {isFormSubmited && submissionSatus === formStates.LOADING && (

        <Lottie
          width="150px"
          height="150px"
          config={{ animationData: loadingAnimation, loop: true, autoplay: true }}
        />

        )}
        {isFormSubmited && submissionSatus === formStates.DONE && (

        <Lottie
          width="150px"
          height="150px"
          config={{ animationData: successAnimation, loop: false, autoplay: true }}
        />
        )}
        {isFormSubmited && submissionSatus === formStates.ERROR && (

        <Lottie
          width="75px"
          height="75px"
          config={{ animationData: errorAnimation, loop: false, autoplay: true }}
        />
        )}
      </Box>
    </form>
  );
}

// eslint-disable-next-line react/prop-types
export default function FormCadastro({ modalProps }) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="flex-end"
    >
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...modalProps}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
