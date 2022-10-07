import React from "react";
import { View, KeyboardAvoidingView } from "react-native";
import styles from "./layout";
import { Formik } from "formik";
import { InformationsSchema } from "./schema";
import { StyledInput } from "../../../common/components/StyledInput";
import { StyledButton } from "../../../common/components/StyledButton";
import Container from "../../../common/components/Container/Container";

const AccountInformations = () => {
  return (
    <Container>
      <Formik
        initialValues={{ name: "", familyName: "", email: "" }}
        onSubmit={(values) => {
          // Appel API pour modifier les informations de l'utilisateur et reset de cache
          console.log(values);
        }}
        validationSchema={InformationsSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <KeyboardAvoidingView behavior={"padding"} style={styles.container}>
            <View>
              <StyledInput
                label="Prénom"
                autoCorrect={false}
                returnKeyType="go"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
                error={!!errors.name}
                helperText={errors.name}
              />
              <StyledInput
                label="Nom"
                autoCorrect={false}
                returnKeyType="go"
                onChangeText={handleChange("familyName")}
                onBlur={handleBlur("familyName")}
                value={values.familyName}
                error={!!errors.familyName}
                helperText={errors.familyName}
              />
              <StyledInput
                label="Email"
                returnKeyType="go"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                error={!!errors.email}
                helperText={errors.email}
              />
            </View>
            <View style={styles.buttonContainer}>
              <StyledButton
                title="Enregistrer"
                onPress={() => handleSubmit()}
              />
            </View>
          </KeyboardAvoidingView>
        )}
      </Formik>
    </Container>
  );
};

export default AccountInformations;
