import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import TextInput from './TextInputTheme';
import ButtonPrimary from './BottomButton';
import { useTheme } from '../../../customHook/ThemeContext';
import { useForm, Controller } from 'react-hook-form';
import { translate } from '../../../locales';
import { useNavigation } from '@react-navigation/native';
import { Checkbox } from 'react-native-paper';

/*
 *   This form is only for login and signup
 *   Component Props:
 **      - data (consist of a list of data for user to enter e.g [{title: 'Email'},{title:'Password'}])
         - isLogin (true/false) to show or hide forgot password line or Signup check boxes.
         - submitTitle (title for the submit button)
         - onSubmit (A handler in main conponent to which data will be sent)

*   Component Details:
**      This comonent will generate a Form according to the given data with n number of TextInputs where
        n is the length of the data array and at the end there will be a Submit button to submit the form.
        We used react-hook-form library to built this component.

*   Implementation Example:
<SignupForm
        data={formData}
        isLogin={false}
        submitTitle='Signup'
        onSubmit={onSignup}
      />
*/
function LoginSignupForm(props) {
  const { control, handleSubmit, errors } = useForm();

  const { theme } = useTheme();
  const style = theme.styles();
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    forgotPassword: {
      // TODO: fontFamily: 'MINISansSerif',
      fontSize: theme.fontSizes.forgotPassword,
      fontWeight: 'normal',
      fontStyle: 'normal',
      lineHeight: 18,
      letterSpacing: 0,
      textAlign: 'left',
      color: theme.colors.textLight,
      marginTop: theme.margins.MarginHorizontal,
    },
    button: {
      marginTop: theme.margins.MarginFormField,
    },
    error: {
      // TODO: fontFamily: 'MINISansSerif',
      fontWeight: 'normal',
      fontStyle: 'normal',
      textAlign: 'left',
      color: theme.colors.primary,
    },
  });

  const formItems = [];

  for (var i = 0; i < props.data.length; i++) {
    const item = props.data[i];

    const error = (
      <View>
        {errors.email && (
          <Text style={styles.error}>Please enter correct value</Text>
        )}
      </View>
    );

    // TODO: We need to find a solution to eliminate if-else for better performance.
    if (item.name === 'email') {
      error = (
        <View>
          {errors.email && errors.email.type === 'required' && (
            <Text style={styles.error}>Email is required</Text>
          )}
          {errors.email && errors.email.type === 'pattern' && (
            <Text style={styles.error}>Email is incorrect</Text>
          )}
        </View>
      );
    } else if (item.name === 'password') {
      error = (
        <View>
          {errors.password && (
            <Text style={styles.error}>Please enter correct password</Text>
          )}
        </View>
      );
    } else if (item.name === 'firstName') {
      error = (
        <View>
          {errors.firstName && (
            <Text style={styles.error}>Please enter First Name</Text>
          )}
        </View>
      );
    } else if (item.name === 'lastName') {
      error = (
        <View>
          {errors.lastName && (
            <Text style={styles.error}>Please enter Last Name</Text>
          )}
        </View>
      );
    } else if (item.name === 'confirmPassword') {
      error = (
        <View>
          {errors.confirmPassword && (
            <Text style={styles.error}>Please enter Last Name</Text>
          )}
        </View>
      );
    } else if (item.name === 'mobile') {
      error = (
        <View>
          {errors.mobile && (
            <Text style={styles.error}>Please enter Mobile</Text>
          )}
        </View>
      );
    } else if (item.name === 'zipCode') {
      error = (
        <View>
          {errors.zipCode && (
            <Text style={styles.error}>Please enter Zipcode</Text>
          )}
        </View>
      );
    }

    formItems.push(
      <View key={item.name}>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <View>
              <Text
                style={{ fontWeight: 'bold', color: '#000000', marginTop: 30 }}
              >
                {item.title}
              </Text>
              <TextInput
                placeholder='Type Here...'
                secureTextEntry={item.secure}
                style={{
                  marginTop: 10,
                  marginBottom: 10,
                }}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            </View>
          )}
          name={item.name}
          rules={{ required: item.required, pattern: item.pattern }}
          defaultValue=''
        />
        {error}
      </View>
    );
  }

  if (!props.isLogin) {
    formItems.push(
      <View key='terms'>
        <Controller
          center
          control={control}
          render={({ onChange, onBlur, value }) => (
            <View style={{ flexDirection: 'row' }}>
              <Checkbox
                status={value ? 'checked' : 'unchecked'}
                color={theme.colors.accent}
                uncheckedColor={theme.colors.textLight}
                onPress={() => {
                  onChange(!value);
                }}
                onBlur={onBlur}
              />
              <Text
                style={{
                  flex: 1,
                  color: theme.colors.textLight,
                }}
              >
                {translate('SignupTerms')}
              </Text>
            </View>
          )}
          rules={{ required: true }}
          name='terms'
          defaultValue={false}
        />
        {errors.terms && (
          <Text style={styles.error}>Accpet Terms and Conditions</Text>
        )}
      </View>
    );

    formItems.push(
      <View key={'authorize'}>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <View style={{ flexDirection: 'row' }}>
              <Checkbox
                status={value ? 'checked' : 'unchecked'}
                color={theme.colors.accent}
                uncheckedColor={theme.colors.textLight}
                onPress={() => {
                  onChange(!value);
                }}
                onBlur={onBlur}
              />
              <Text style={{ flex: 1, color: theme.colors.textLight }}>
                {translate('SignupInfoShare')}
              </Text>
            </View>
          )}
          rules={{ required: true }}
          name='authorize'
          defaultValue={false}
        />
        {errors.authorize && (
          <Text style={styles.error}>Accpet Data Agreement</Text>
        )}
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          {formItems}

          {props.isLogin && (
            <Text style={styles.forgotPassword}>Forgot your password?</Text>
          )}

          <ButtonPrimary
            onPress={handleSubmit(props.onSubmit)}
            style={styles.button}
            title={props.submitTitle}
          />

          {props.isLogin && (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Signup');
              }}
            >
              <Text
                style={
                  (style.textLabel,
                  {
                    textAlign: 'center',
                    marginTop: theme.margins.MarginFormField,
                    marginBottom: theme.margins.MarginFormField,
                  })
                }
              >
                {translate('NewToMINI')}{' '}
                <Text style={{ fontWeight: 'bold', color: '#000000' }}>
                  {translate('CreateAccount')}
                </Text>
              </Text>
            </TouchableOpacity>
          )}

          {!props.isLogin && (
            <TouchableOpacity onPress={() => {}} activeOpacity={0.7}>
              <Text
                style={
                  (style.textLabel,
                  {
                    textAlign: 'center',
                    marginTop: theme.margins.MarginFormField,
                    marginBottom: theme.margins.MarginFormField,
                  })
                }
              >
                {translate('AlreadyMember')}{' '}
                <Text style={{ fontWeight: 'bold', color: '#000000' }}>
                  {translate('Login')}
                </Text>
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default LoginSignupForm;
