import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function MemberSignup() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");

  let submitAvailable = true;

  const navigate = useNavigate();

  if (password.length <= 5) {
    submitAvailable = false;
  }

  function handleSubmit() {
    axios
      .post("/api/member/signup", {
        id,
        password,
        email,
        gender,
        phone,
        birthDate,
      })
      .then(() => console.log("good"))
      .catch(() => console.log("bad"))
      .finally(() => console.log("done"));
  }

  return (
    <Box>
      <Text>회원가입</Text>
      <FormControl>
        <FormLabel>ID</FormLabel>
        <Input value={id} onChange={(e) => setId(e.target.value)} />
        <Button>중복확인</Button>
      </FormControl>
      <FormControl isInvalid={password.length <= 5}>
        <FormLabel>비밀번호</FormLabel>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </FormControl>
      <FormControl>
        <FormLabel>E-Mail</FormLabel>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormControl>
      <FormControl>
        <FormLabel>성별</FormLabel>
        <RadioGroup onChange={setGender} value={gender}>
          <Stack direction="row">
            <Radio value="남">남</Radio>
            <Radio value="여">여</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>전화번호</FormLabel>
        <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
      </FormControl>
      <FormControl>
        <FormLabel>생년월일</FormLabel>
        <Input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </FormControl>
      <Button onClick={handleSubmit} isDisabled={!submitAvailable}>
        가입
      </Button>
      <Button onClick={() => navigate("/")}>취소</Button>
    </Box>
  );
}
