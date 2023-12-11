import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import styles from '../../../Styles.tsx';

export default function AccountForm(): JSX.Element {
  const [isFocus, setIsFocus] = useState<string | false>(false);
  const [reload, setReload] = useState(false);
  const [fields, setFields] = useState({
    firstName: '',
    lastName: '',
  });

  const fieldsErrorsRef = useRef({
    firstName: false,
    lastName: false,
  });

  const handleSubmit = () => {
    const regex = /^[a-zA-Z0-9\s]*$/;

    if (fields?.firstName?.length < 1) {
      fieldsErrorsRef.current.firstName = 'Champs vide.';
    } else if (!regex.test(fields?.firstName)) {
      fieldsErrorsRef.current.firstName = 'Caractères spéciaux détectés.';
    } else {
      fieldsErrorsRef.current.firstName = false;
    }

    if (fields?.lastName?.length < 1) {
      fieldsErrorsRef.current.lastName = 'Champs vide.';
    } else if (!regex.test(fields?.lastName)) {
      fieldsErrorsRef.current.lastName = 'Caractères spéciaux détectés.';
    } else {
      fieldsErrorsRef.current.lastName = false;
    }

    setReload((prevReload) => !prevReload); 
  };

  useEffect(() => {
    console.log('Reload');
  }, [reload]);

  return (
    <>

      <View style={styles.formHeader}>
          <Text style={styles.formHeaderText}>Compte Uber</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.formTitle}>Nom</Text>
          <Text style={styles.formSubTitle}>
            Il s'agit du nom que vous souhaitez que les autres utilisateurs utilisent pour vous désigner.
          </Text>

          {!fieldsErrorsRef?.current?.lastName && !fieldsErrorsRef?.current?.firstName && <Text style={styles.successText}>Message envoyé avec succès</Text>}
  
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Prénom</Text>
            <View style={styles.positionRelative}>
            <TextInput
              value={fields.firstName}
              style={[styles.formInput, isFocus === 'firstName' ? styles.formInputFocus : styles.formInputOut]}
              onFocus={() => setIsFocus('firstName')}
              onBlur={() => setIsFocus(false)}
              onChangeText={(text) => setFields((prevState) => ({ ...prevState, firstName: text }))}
            />
              <Text style={styles.cross}>x</Text>
            </View>

            {fieldsErrorsRef?.current?.firstName && <Text style={styles.errorText}>{fieldsErrorsRef?.current?.firstName}</Text>}
          </View>
  
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Nom de famille</Text>
            <View style={styles.positionRelative}>
            <TextInput
              value={fields.lastName}
              style={[styles.formInput, isFocus === 'lastName' ? styles.formInputFocus : styles.formInputOut]}
              onFocus={() => setIsFocus('lastName')}
              onBlur={() => setIsFocus(false)}
              onChangeText={(text) => setFields((prevState) => ({ ...prevState, lastName: text }))}
            />
              <Text style={styles.cross}>x</Text>
            </View>

            {fieldsErrorsRef?.current?.lastName && <Text style={styles.errorText}>{fieldsErrorsRef.current?.lastName}</Text>}
          </View>
  
          <Pressable style={styles.buttonSubmit} onPress={handleSubmit}>
            <Text style={styles.buttonSubmitText}>Mettre à jour</Text>
          </Pressable>
        </View>
    </>
  );
};