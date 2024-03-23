import React from "react";

function Footer() {
  return (
    <div
      id="content-wrapper"
      class="d-flex flex-column"
      style={{ height: "2rem", overflowX: "visible" }}
    >
      <footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>Copyright &copy; Your Website 2021</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
