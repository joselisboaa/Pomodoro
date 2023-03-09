import GoogleIcon from "@mui/icons-material/Google";
import {
    Button,
    Checkbox,
    TextField,
    FormControlLabel,
    Grid,
    Box,
    Typography,
    Paper,
    Link,
    FormHelperText,
} from "@mui/material";
import { Styles } from "./styles";
import Logo from "../../assets/Logo.svg"
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup"
import { userServices } from "../../shared/service/api/user";
import { useNavigate } from "react-router-dom";

interface IFormDataValues {
    email: string;
    nome: string;
    senha: string;
    confirmsenha: string;
    confirmemailbox: boolean;
}

export const Cadastro: React.FC = () => {

    const navigate = useNavigate();

    const initialValues: IFormDataValues = {
        nome: "",
        email: "",
        senha: "",
        confirmsenha: "",
        confirmemailbox: false
    };

    const validationSchema = Yup.object().shape({
        nome: Yup.string().min(3,"O nome precisa ter pelo menos três caracteres.").required("Campo Obrigatório."),
        email: Yup.string().email("Email não válido.").required("Campo Obrigatório."),
        senha: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&.,])[A-Za-z\d@$!%*#?&.,]{8,}$/,
            "No mínimo 8 caracteres." +
            "uma letra maiúscula e minúscula." +
            "um número e um caracter especial."
        ).required("Campo Obrigatório."),
        confirmsenha: Yup.string().oneOf([Yup.ref("senha")], "A senha não concide com a primeira.").required("Campo Obrigatório."),
        confirmemailbox: Yup.string().oneOf(["true"], "Confirme o seu Email.")
    });

    const onSubmit = async (values: IFormDataValues, props: FormikHelpers<IFormDataValues>) => {
        try {
            const response = await userServices.postUser(values.email, values.nome, values.senha);
            props.resetForm();
            props.setSubmitting(false);
            alert("Cadastrado com sucesso");
            navigate("/login");
        } catch(error) {
            alert(error);
        }
    };

    return (
        <Box sx={Styles.background}>
            <Box sx={Styles.headerContainer}>
                <Box id="header-logo" sx={Styles.box}>
                    <Box>
                        <img src={Logo} width="78px" />
                    </Box>
                    <Typography variant="h3" margin={1} sx={Styles.logoTitle}>
                        <Typography variant="h3" sx={Styles.titleColor}>Health</Typography>Pomo
                    </Typography>
                </Box>
            </Box>
            <Paper elevation={9} sx={Styles.paper} style={Styles.paperStyle}>
                <Typography component="h1" variant="h4" sx={Styles.title}>
                    Cadastro
                </Typography>
                <Box
                    sx={Styles.googleRegisterContainer}
                >
                    <Box sx={{ mt: 5, mb: 2 }}>
                        <Button
                            type="submit"
                            variant="contained"
                            color={"secondary"}
                            sx={Styles.button}
                            startIcon={<GoogleIcon fontSize="large" />}
                        >
                            Cadastre-se com Google
                        </Button>
                    </Box>
                    <Typography color={"white"}>ou</Typography>
                    <Box sx={{ mt: 2 }} >
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                            {(props) => (
                                <Form>
                                    <Grid container spacing={2}>
                                        <Grid item xs={16} sm={6} >
                                            <Field as={TextField}
                                                fullWidth
                                                name="nome"
                                                size="small"
                                                placeholder="User"
                                                helperText={<ErrorMessage name="nome" />}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Field as={TextField}
                                                size="small"
                                                password
                                                fullWidth
                                                id="Senha"
                                                type="password"
                                                placeholder="Senha"
                                                name="senha"
                                                helperText={<ErrorMessage name="senha" />}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Field as={TextField}
                                                size="small"
                                                fullWidth
                                                id="email"
                                                placeholder="Email"
                                                name="email"
                                                autoComplete="email"
                                                helperText={<ErrorMessage name="email" />}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Field as={TextField}
                                                size="small"
                                                password
                                                fullWidth
                                                name="confirmsenha"
                                                placeholder="Confirme a Senha"
                                                type="password"
                                                id="Confirme a Senha"
                                                helperText={<ErrorMessage name="confirmsenha" />}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControlLabel
                                                sx={Styles.helperText}
                                                control={<Field as={Checkbox} name="confirmemailbox" color="primary" />}
                                                label="Confirme o Email"
                                            />
                                            <FormHelperText sx={Styles.helperText}><ErrorMessage name="confirmemailbox" /></FormHelperText>
                                        </Grid>
                                    </Grid>
                                    <Grid container justifyContent="center">
                                        <Box sx={{ mt: 2, mb: 3 }}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                sx={Styles.button}
                                                color={"primary"}
                                                disabled={props.isSubmitting}
                                            >
                                                {props.isSubmitting ? "Carregando" : "Cadastre-se"}
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Form>
                            )}
                        </Formik>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Typography color="white" sx={Styles.loginText}>
                                    Já tem login?
                                    <Link href="/login" variant="body1">
                                        Fazer login
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}

export default Cadastro