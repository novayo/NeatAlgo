import { useState } from "react";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import NeatNavbar from "pages/Navbars";
import NeatFooter from "pages/Footers";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// react-pdf
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css"; // Disable text area

// 需要加這個才能使用
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function OnePagePDF({ pdf_file, default_page }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(default_page);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function goToPrevPage() {
    setPageNumber(pageNumber - 1 < 1 ? numPages : pageNumber - 1);
  }

  function goToNextPage() {
    setPageNumber(pageNumber + 1 > numPages ? 1 : pageNumber + 1);
  }

  return (
    <>
      {/* Navbar */}
      <NeatNavbar />

      {/* 空白區域 */}
      <MKBox minHeight="5vh" width="100%"></MKBox>
      <Grid container spacing={0} direction="column" alignItems="center" justify="center">
        <Grid item xs={4}>
          <Card
            sx={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
              p: 10,
              mt: 8,
              mb: 4,
              backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
                rgba(white.main, 0.8),
              backdropFilter: "saturate(200%) blur(30px)",
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
            }}
          >
            <MKTypography variant="h3"> Terms Of Use </MKTypography>
            <MKTypography>
              Page {pageNumber} of {numPages}
            </MKTypography>
            <Document file={pdf_file} onLoadSuccess={onDocumentLoadSuccess}>
              <Page scale="1.2" pageNumber={pageNumber} renderTextLayer={false} />
            </Document>
            <Grid container spacing={1} align="center" direction="row">
              <Grid item xs={6}>
                <MKButton onClick={goToPrevPage} color="dark" variant="gradient" fullWidth>
                  上一頁
                </MKButton>
              </Grid>
              <Grid item xs={6}>
                <MKButton onClick={goToNextPage} color="dark" variant="gradient" fullWidth>
                  下一頁
                </MKButton>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <NeatFooter />
    </>
  );
}

export default OnePagePDF;
