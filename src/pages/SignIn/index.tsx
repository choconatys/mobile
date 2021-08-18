/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useRef } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';

import { Form } from '@unform/mobile';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';

import getValidationErrors from '../../utils/getValidationErros';

import { Container, SubTitle, Title } from './styles';
import { useAuth } from '../../hooks/auth';
import { useNavigation } from '@react-navigation/native';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<any>(null);

  const passwordInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  const { signIn } = useAuth();

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({ email: data.email, password: data.password });

        navigation.navigate('Dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        console.log(err);

        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, cheque as credenciais.',
        );
      }
    },
    [navigation, signIn],
  );

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <View>
              <Title>Área Restrita</Title>
              <SubTitle>
                Coloque suas credenciais para obter acesso a página de pedidos
              </SubTitle>
            </View>

            <Form ref={formRef} onSubmit={handleSignIn}>
              <Input
                autoCorrect={false}
                name="email"
                icon="mail"
                placeholder="E-mail"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />

              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="Senha"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />
            </Form>

            <Button onPress={() => formRef.current?.submitForm()}>
              Entrar
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;
