import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));
  
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));

function createData(
        conferenceName,
        link,
        paper,
    ) {
    return { conferenceName, link, paper};
}

const rows = [
    createData('2021年3月 SC研究会 「サイバーフィジカルシステムを支えるサービスコンピューティング技術及び一般」', 
    <a href="https://cs27.org/?Activity/2021/03/SC%B8%A6%B5%E6%B2%F1%A1%CA%BE%BE%BE%EC%A1%A2%CC%C0%C0%D0%A1%A2%B1%C0%C3%B0%B5%B5%A1%CB">リンク</a>, 
    <a href="https://www.ieice.org/ken/paper/20210319XC30/">論文リンク</a>),
    createData('2021年7月 認知症予防学会',
    <a href="https://cs27.org/?Activity/2021/06/%C7%A7%C3%CE%BE%C9%CD%BD%CB%C9%B3%D8%B2%F1%28%C3%E6%C2%BC%A1%A4%B4%D8%CB%DC%A1%A4%CC%C0%C0%D0%29">リンク</a>, 
    '論文なし'),
    createData('2021年11月 SC研究会 「社会変化に伴う際のサービスとソフトウェア・システム構築とその高度化および一般」',
    <a href='https://cs27.org/?Activity/2021/11/SC%B8%A6%B5%E6%B2%F1%A4%CB%BB%B2%B2%C3%A4%B7%A4%DE%A4%B7%A4%BF%A1%CA%CC%C0%C0%D0%A1%A2%C6%C1%C5%C4%A1%CB'>リンク</a>, 
    <a href='https://www.ieice.org/ken/paper/202111067Cg0/'>論文リンク</a>),
    createData('2022年3月 NLC研究会 「観光情報処理と一般」',
    '詳細リンクなし',
    <a href='https://www.ieice.org/ken/paper/20220307MCjn/'>論文リンク</a>),
    createData('2022年3月 KBSE研究会',
    <a href='https://cs27.org/?Activity/2022/03/KBSE%B8%A6%B5%E6%B2%F1%A1%CA%BE%BE%BE%EC%A1%A2%CC%C0%C0%D0%A1%CB'>リンク</a>,
    <a href='https://www.ieice.org/ken/paper/20220309jCJC/'>論文リンク</a>),
    createData('2022年6月 36th Global Conference of Alzheimer&#39s Disease International',
    <a href='https://es4.eedept.kobe-u.ac.jp/adi2022%e3%81%ab%e5%8f%82%e5%8a%a0%e3%81%97%e3%81%be%e3%81%97%e3%81%9f/'>リンク</a>,
    '論文なし')
]


const SymposiumList = () => {
    return(
        <>
        <h2>[学会参加歴]</h2>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                    <StyledTableCell align='center'>参加学会</StyledTableCell>
                    <StyledTableCell>詳細サイトリンク</StyledTableCell>
                    <StyledTableCell>論文リンク</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.map((row) => (
                            <StyledTableRow key={row.conferenceName}>
                                <StyledTableCell component="th" scope="row" align='center'>
                                    {row.conferenceName}
                                </StyledTableCell>
                                <StyledTableCell>{row.link}</StyledTableCell>
                                <StyledTableCell>{row.paper}</StyledTableCell>
                            </StyledTableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
        </>
    );
}

export default SymposiumList;