import React, { useState } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";
import Button from "../button";
import Input from "../input";

const Header = () => {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  return (
    <header>
        <S.Wrapper>
          <Input
            type="text"
            onChange={(event) => setUsernameForSearch(event.target.value)}
          >
            Digite o username para pesquisa...
          </Input>
          <Button
            type="submit"
            onClick={submitGetUser}
          >
            Buscar
          </Button>
        </S.Wrapper>
    </header>
  );
};

export default Header;