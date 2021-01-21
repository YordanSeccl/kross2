import React from "react";
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import BlogPreview from "./cms-preview-templates/blog";
import CareersPreview from "./cms-preview-templates/careers";


CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("blog", BlogPreview);
CMS.registerPreviewTemplate("careers", CareersPreview);
CMS.init();
