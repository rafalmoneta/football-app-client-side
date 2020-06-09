import * as React from "react";

function SvgPerson(props) {
  return (
    <svg
      viewBox="0 0 10000 12500"
      fillRule="evenodd"
      clipRule="evenodd"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      {...props}
    >
      <defs>
        <style>{".Person_svg__fil0{fill:#000;fill-rule:nonzero}"}</style>
      </defs>
      <path
        className="Person_svg__fil0"
        d="M5000 1250c-1033 0-1870 838-1870 1870 0 1033 837 1871 1870 1871s1870-838 1870-1871c0-1032-837-1870-1870-1870zM3159 7129v1621h3682V7129h225v1621h1135V6597c0-631-516-1148-1147-1148H2947c-631 0-1148 517-1148 1148v2153h1135V7129h225z"
      />
    </svg>
  );
}

export default SvgPerson;
