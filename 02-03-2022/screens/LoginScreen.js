import { StyleSheet, View, Text } from "react-native";
import React from "react";

import axios from "axios";
import { Formik, Field } from "formik";
import * as Yup from "yup";

import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Icon,
} from "native-base";

import Ionicons from "react-native-vector-icons/Ionicons";

const IoniconsHeaderButton = (props) => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const validateSchema = Yup.object().shape({
    email: Yup.string()
      .email("รูปแบบอีเมล์ไม่ถูกต้อง")
      .required("กรุณากรอกอีเมล์ใหม่"),
    password: Yup.string()
      .min(3, "รหัสผ่านต้อง 3 ตัวอักษรขึ้นไป")
      .required("กรุณาป้อนรหัสผ่านใหม่"),
  });

  
const LoginScreen = ({ navigation }) => {

  return (
    <Container>
      <Content padder>
        <Formik
          //ค่าเริ่มต้นของข้อมูลโดยกำหนดให้ตรงกัน backend
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validateSchema}
          onSubmit={async(values,{setSubmitting}) => {
            // same shape as initial values
            //alert(JSON.stringify(values));
            try {
             
            } catch (error) { //ถ้าไม่สามารถบันทึกข้อมูลลง server ได้ เช่น เช็ค e-mail ซ้ำ
             
            }finally{ //ให้ปุ่มสามารถกลับมาคลิกได้อีก
              setSubmitting(false);
            }
          }}
        >
          {/*//errors ใช้สำหรับการตรวจสอบ state (ถ้าผู้ใช้ไม่กรอกข้อมูลจะให้ error อะไรเกิดขึ้น)*/}
          {/* touched  เมื่อผู้ใช้ไปกดที่ name และเลื่อนเม้าส์ไปด้านนอกช่อง input โดยไม่กรอกข้อมูล*/}

          {({
            errors,
            touched,
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form>
              <Item
                fixedLabel
                error={errors.email && touched.email ? true : false}
              >
                <Label>Email</Label>
                <Input
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  keyboardType="email-address" //ชนิกของคีย์บอร์ด เวลาพิมพ์ต้องมี @
                />
                {errors.email && touched.email && <Icon name="close-circle" />}
              </Item>
              {errors.email && touched.email && (
                <Item>
                  <Label style={{ color: "red" }}>{errors.email}</Label>
                </Item>
              )}
              <Item
                fixedLabel
                error={errors.password && touched.password ? true : false}
              >
                <Label>Password</Label>
                <Input
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  keyboardType="number-pad" //ให้คีย์บอร์ดแสดงเฉพาะตัวแรก
                  secureTextEntry={true} //ให้กรอกข้อมูลแล้วแสดงเป็นจุด
                />
                {errors.password && touched.password && (
                  <Icon name="close-circle" />
                )}
              </Item>
              {errors.password && touched.password && (
                <Item>
                  <Label style={{ color: "red" }}>{errors.password}</Label>
                </Item>
              )}
              <Button
                onPress={handleSubmit}
                //ไว้สำหรับเปิด หริอ ปิด ปุ่มการทำงาน
                disabled={isSubmitting}
                block
                large
                style={{ marginTop: 30, backgroundColor: "#E9AB17" }}
              >
                <Text
                  style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
                >
                  Log In
                </Text>
              </Button>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};


export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
