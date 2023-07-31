import React from 'react';
import './App.css';
import {ConfirmModal} from "./Components/Modals/ConfirmModal";
import {Box, Button, Container, ThemeProvider} from "@mui/material";
import {theme} from "./Theme";
import {SwitchForm} from "./Components/Inputs/SwitchForm";
import {Description} from "./Components/Description";
import {Title} from "./Components/Title";
import {HorizontalRule} from "./Components/HorizontalRule";
import {CONTENT_BORDER_STYLE} from "./Style";
import {SubTitle} from "./Components/SubTitle";
import {EditList} from "./Components/EditList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Profile} from "./Components/Profile";
import {Loading} from "./Components/Loading";
import {Header} from "./Components/Header";
import {Footer} from "./Components/Footer";

function App() {

  const [open, setOpen] = React.useState<boolean>(false);

  const [checked, setChecked] = React.useState<boolean>(false);

  const [loading, setLoading] = React.useState<boolean>(false);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header username={""}/>

        <Container maxWidth="md">
          <Routes>
            <Route path="/profile" element={ <Profile /> } />
          </Routes>

          {/* PROFILE */}
          <Box sx={CONTENT_BORDER_STYLE}>
            <SubTitle subTitle="基本設定" />
            <Description
              message={
                <>
                  一部の情報は、Google サービスを利用する他のユーザーに表示される場合があります。
                  {/*<Link href=''>詳細</Link>*/}
                </>
              }
            />
            <EditList
              items={
                [
                  {
                    id: "profile",
                    title: "名前",
                    editValues: ["今野 颯太", "あいうえいお"],
                    navigateTo: "profile",
                    onClick: (): void => {alert("onClick")}
                  },
                  {
                    id: "birthday",
                    title: "生年月日",
                    editValues: ["1999年11月12日"],
                    onClick: (): void => {alert("onClick")}
                  },
                  {
                    id: "gender",
                    title: "性別",
                    editValues: ["男性"],
                    onClick: (): void => {alert("onClick")}
                  },
                ]
              }
            />
          </Box>


          <Title
            title="Google Fit のデータ権限"
          />

          <Description
            message="Google Fit で Google アカウントに新しい健康指標データや月経周期の管理データを保存することを停止できます。この設定は Google Fit アプリの機能にのみ影響します。"
          />

          {/* SWITCH */}
          <SwitchForm
            title="健康指標データを保存"
            message="これには、心拍数、呼吸数、血圧に関する情報が含まれます"
            checked={checked}
            onChange={(checked: boolean): void => {
              setChecked(checked);
            }}
            disabled={true}
          />
          <SwitchForm
            title="月経周期の管理データを保存"
            message="Google に、スマートフォンの Fit アプリを使用して追加された月経周期の管理データを保存、処理することを許可します"
            checked={checked}
            onChange={(checked: boolean): void => {
              setChecked(checked);
            }}
            disabled={false}
          />

          <HorizontalRule />

          {/* MODAL */}
          <ConfirmModal
            open={open}
            title="健康指標データの保存をオフにしますか？"
            message="Google Fit で新しい健康指標データの保存が停止されます。なお、オフにしても既存のデータは削除されません。既存のデータを削除するには、Google Fit アプリを開き、[設定] > [データを削除] に移動します。"
            onConfirm={(): void => {alert("onConfirm")}}
            onCancel={(): void => {setOpen(false)}}
          />

          <Button
            sx={{zIndex: 11111}}
            onClick={(): void => {
              setLoading(!loading);
            }}
          >
            Loading
          </Button>
          <Button
            onClick={(): void => {
              setOpen(true);
            }}
          >
            Modal Test
          </Button>
        </Container>

        <Loading loading={loading} />

        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
