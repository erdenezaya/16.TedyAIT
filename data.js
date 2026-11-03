// Applied Information Technology — Year 11 ATAR (Units 1 & 2)
// Source: SCSA AIT ATAR Year 11 syllabus + teacher's slides (Application Skills, Project Management, Site maps).
// Topics with src: "slides" come directly from the teacher's slides.

const SITE = {
  "short": "AIT",
  "title": "Applied Information Technology Exam Prep",
  "subtitle": "Year 11 ATAR · Units 1 & 2",
  "lead": "Every topic has a plain-English explanation, the keywords markers look for, and model answers broken down mark by mark. Topics tagged \"From slides\" come straight from your teacher's slides, so revise those first.",
  "practiceLabel": "Practice",
  "practiceLead": "The exam includes plenty of applied questions: writing formulas, calculating file sizes, choosing file formats, drawing site maps and LANs, and referencing sources. Try each task yourself first, use a hint if you get stuck, then compare with the model answer."
};

const CATEGORIES = [
  {
    "id": "design",
    "label": "Design concepts"
  },
  {
    "id": "app",
    "label": "Application skills"
  },
  {
    "id": "pm",
    "label": "Project management"
  },
  {
    "id": "hw",
    "label": "Hardware & OS"
  },
  {
    "id": "data",
    "label": "Managing data"
  },
  {
    "id": "net",
    "label": "Networks"
  },
  {
    "id": "impact",
    "label": "Impacts of technology"
  },
  {
    "id": "web",
    "label": "Web & multimedia"
  }
];

const COMMAND_WORDS = [
  [
    "State / Identify / List / Name",
    "A word or short phrase. No explanation needed.",
    "Name two raster file formats. → JPEG, PNG."
  ],
  [
    "Define",
    "Give the meaning plus a distinguishing feature.",
    "Define scope creep."
  ],
  [
    "Outline",
    "Give the main points briefly. 1 mark ≈ 1 point.",
    "Outline two functions of an operating system."
  ],
  [
    "Describe",
    "Give characteristics and features in detail.",
    "Describe a peer-to-peer network."
  ],
  [
    "Explain",
    "Say WHY or HOW. Link cause to effect: because…, which means…, this results in…",
    "Explain why a vector format is suitable for a logo."
  ],
  [
    "Compare / Distinguish",
    "Cover similarities AND differences. Use whereas, however.",
    "Compare a backup and an archive."
  ],
  [
    "Justify / Recommend",
    "State your choice, then give reasons linked to the scenario.",
    "Recommend a file format for the poster and justify your choice."
  ],
  [
    "Discuss / Evaluate",
    "Give advantages AND disadvantages, then reach a conclusion.",
    "Discuss the impact of cloud computing on a small business."
  ],
  [
    "Using the scenario / case study",
    "You MUST include specific examples from the scenario. Generic answers won't get full marks.",
    "…for the café described in the case study."
  ]
];

const TOPICS = [
  {
    "id": "elements",
    "cat": "design",
    "title": "Elements of design",
    "subtitle": "The building blocks of every design",
    "explain": [
      "The elements of design are the basic building blocks of any design. The syllabus lists seven: line, shape, space, texture, colour, 3D form and tone.",
      "Line directs the eye and separates sections. Shape is a 2D form (circle, square). 3D form is a shape that appears to have depth and volume (through shading or perspective). Space is positive (the objects) and negative or white space; white space lets content breathe and makes it easier to read.",
      "Texture is how a surface feels or appears to feel (rough, smooth). Colour creates mood, brand identity and contrast (hue, saturation). Tone is the range of light and dark values, which adds depth and highlights.",
      "Exams often show a design (a poster or web page) and ask you to identify the elements and explain how they are used. Always name the element AND say exactly where and why it is used in that design."
    ],
    "analogy": "Elements are the ingredients (flour, eggs, milk); principles are the recipe that tells you how to combine them.",
    "keywords": [
      [
        "line",
        "directs the eye; separates content"
      ],
      [
        "shape / 3D form",
        "2D outline / form with apparent depth"
      ],
      [
        "space (positive / negative / white space)",
        "the area around and between elements"
      ],
      [
        "texture",
        "real or implied surface quality"
      ],
      [
        "colour (hue, saturation)",
        "creates mood, brand and contrast"
      ],
      [
        "tone (light and dark values)",
        "lightness/darkness that adds depth"
      ]
    ],
    "practice": [
      {
        "q": "Identify two elements of design used in a gym promotion poster and explain how each one is used.",
        "marks": 4,
        "verb": "Explain",
        "points": [
          "Colour: bright red and orange are used for the heading.",
          "This creates energy and draws attention to the gym's name, matching the active brand.",
          "Line: diagonal lines run behind the athlete image.",
          "These suggest movement and lead the viewer's eye towards the membership offer."
        ]
      },
      {
        "q": "Explain the purpose of white space in a website layout.",
        "marks": 2,
        "verb": "Explain",
        "points": [
          "White (negative) space separates content so the page looks uncluttered and is easier to read.",
          "It helps important items stand out and guides the user to focus on key content."
        ]
      }
    ],
    "mistakes": [
      "Naming an element without explaining how it is used in the design.",
      "Mixing up elements (what is used) with principles (how it is arranged)."
    ]
  },
  {
    "id": "principles",
    "cat": "design",
    "title": "Principles of design",
    "subtitle": "How the elements are arranged",
    "explain": [
      "The principles of design are the rules for HOW elements are arranged to make an effective design. The syllabus lists: balance, emphasis (contrast and proportion), dominance, unity (proximity and repetition), pattern and movement.",
      "Balance: symmetrical (both sides mirror each other; formal), asymmetrical (different but equal visual weight; dynamic) or radial (radiating from a centre). Emphasis makes important items stand out using contrast (differences in colour, size, light/dark) and proportion (relative size).",
      "Dominance means one element is the largest or strongest, so the eye goes there first. Unity makes all parts look like one whole: proximity (placing related items close together) and repetition (repeating colours, fonts and shapes).",
      "Pattern is the regular repetition of an element. Movement guides the viewer's eye along a path through the design (lines, direction, decreasing size)."
    ],
    "analogy": "Think of an orchestra: dominance is the lead singer, unity is everyone playing the same tune, balance is the musicians spread evenly across the stage.",
    "keywords": [
      [
        "balance (symmetrical / asymmetrical / radial)",
        "even distribution of visual weight"
      ],
      [
        "emphasis — contrast and proportion",
        "making key items stand out"
      ],
      [
        "dominance / focal point",
        "the strongest element, seen first"
      ],
      [
        "unity — proximity and repetition",
        "everything looks like it belongs together"
      ],
      [
        "pattern",
        "regular, repeated elements"
      ],
      [
        "movement / visual flow",
        "the path the eye follows"
      ]
    ],
    "practice": [
      {
        "q": "Explain how a designer could use the principle of unity in a school website.",
        "marks": 3,
        "verb": "Explain",
        "points": [
          "Repetition: use the same school colours, fonts and button styles on every page.",
          "Proximity: group related items, such as a news headline with its image and date, close together.",
          "This makes all pages look like one consistent product, so users recognise the brand and navigate easily."
        ]
      },
      {
        "q": "Distinguish between symmetrical and asymmetrical balance.",
        "marks": 2,
        "verb": "Distinguish",
        "points": [
          "Symmetrical balance places equal visual weight evenly on both sides of a central axis, giving a formal, stable look.",
          "Asymmetrical balance uses different elements on each side that still feel balanced in visual weight, giving a more dynamic, modern look."
        ]
      },
      {
        "q": "Describe how contrast can create emphasis on a poster.",
        "marks": 2,
        "verb": "Describe",
        "points": [
          "Contrast places very different elements together, e.g. bright yellow text on a dark background or a large heading next to small body text.",
          "The difference makes the key information stand out so it is noticed first."
        ]
      }
    ],
    "mistakes": [
      "Forgetting the two sub-parts of unity: proximity and repetition.",
      "Confusing emphasis and dominance: dominance is the ONE most dominant element."
    ]
  },
  {
    "id": "typography",
    "cat": "design",
    "title": "Typography",
    "subtitle": "Typeface, size, alignment, format and spacing",
    "explain": [
      "Typography is the art of arranging text so it is readable and appealing. The syllabus covers typeface, size, alignment, format and spacing.",
      "Typefaces: serif (small strokes on letters, e.g. Times New Roman; good for long printed text), sans serif (no strokes, e.g. Arial; easy to read on screen), script (handwriting style) and decorative/display (for headings). Using no more than two or three fonts keeps a design unified.",
      "Size: large headings and smaller body text create a visual hierarchy (measured in points). Alignment: left (most readable), right, centre (headings) and justified (both edges straight, like newspapers). Format: bold, italic, underline, uppercase; use for emphasis but don't overdo it.",
      "Spacing: kerning (space between two specific letters), tracking (even spacing across all letters) and leading (space between lines). Good spacing improves readability and legibility."
    ],
    "analogy": "A font is like a voice: serif is a formal speaker, sans serif a friendly chat, script the voice of a wedding invitation.",
    "keywords": [
      [
        "typeface: serif / sans serif / script / display",
        "styles of lettering"
      ],
      [
        "font size (pt) / hierarchy",
        "size shows importance"
      ],
      [
        "alignment: left / right / centre / justified",
        "how text lines up"
      ],
      [
        "format: bold / italic / case",
        "styling for emphasis"
      ],
      [
        "kerning / tracking / leading",
        "letter-pair / overall letter / line spacing"
      ],
      [
        "readability / legibility",
        "how easily text can be read"
      ]
    ],
    "practice": [
      {
        "q": "Recommend a typeface type for the body text of a website and justify your choice.",
        "marks": 2,
        "verb": "Justify",
        "points": [
          "A sans serif typeface such as Arial or Verdana.",
          "It has clean letterforms without serifs, making it more legible on screens, especially at small sizes."
        ]
      },
      {
        "q": "Define leading and explain its effect on readability.",
        "marks": 2,
        "verb": "Explain",
        "points": [
          "Leading is the vertical space between lines of text.",
          "Too little leading makes lines crowd together and hard to read, while appropriate leading lets the eye move easily from one line to the next."
        ]
      }
    ],
    "mistakes": [
      "Mixing up kerning, tracking and leading.",
      "Saying that using many fonts is good design."
    ]
  },
  {
    "id": "composition",
    "cat": "design",
    "title": "Composition: reading gravity, rule of thirds, grid",
    "subtitle": "Where elements are placed on the page",
    "explain": [
      "Compositional rules tell you where to place elements on a page. The syllabus covers reading gravity, the rule of thirds, and grid and alignment.",
      "Reading gravity: Western readers start at the top-left and finish at the bottom-right (the Z-pattern or Gutenberg diagram). The top-left is the primary optical area, so the logo or headline goes there; the bottom-right is the terminal area, so the call to action (\"Buy now\", the date) goes there.",
      "Rule of thirds: divide the page into nine equal parts with two vertical and two horizontal lines. Placing the main subject (a face, a product) on one of the four intersection points looks more interesting and balanced than placing it dead centre.",
      "Grid and alignment: an invisible grid of columns and rows keeps elements lined up, so the page looks clean, professional and consistent."
    ],
    "analogy": "The rule of thirds is the 3 × 3 grid on your phone camera: a portrait looks better when the person sits on an intersection, not dead centre.",
    "keywords": [
      [
        "reading gravity / Z-pattern",
        "the natural direction the eye scans"
      ],
      [
        "primary optical area / terminal area",
        "where the eye starts / finishes"
      ],
      [
        "rule of thirds / intersection points",
        "3 × 3 grid for placing subjects"
      ],
      [
        "grid / alignment",
        "invisible structure that lines things up"
      ],
      [
        "focal point",
        "the centre of attention"
      ],
      [
        "visual hierarchy",
        "order in which items are noticed"
      ]
    ],
    "practice": [
      {
        "q": "Explain how reading gravity should influence the layout of an event poster.",
        "marks": 3,
        "verb": "Explain",
        "points": [
          "Readers scan from the top-left (primary optical area) diagonally to the bottom-right (terminal area).",
          "So the event title or logo should be placed top-left where the eye starts.",
          "Key action details such as the date, ticket link or QR code should be placed bottom-right where the eye finishes."
        ]
      },
      {
        "q": "Describe the rule of thirds.",
        "marks": 2,
        "verb": "Describe",
        "points": [
          "The layout is divided into a 3 × 3 grid by two equally spaced horizontal and two vertical lines.",
          "Important elements are placed along these lines or at their four intersection points to create a balanced, more interesting composition."
        ]
      }
    ],
    "mistakes": [
      "Saying the rule of thirds puts the main subject in the centre. It goes on an intersection point."
    ]
  },
  {
    "id": "data-organisation",
    "cat": "app",
    "src": "slides",
    "title": "Data organisation, backup vs archive",
    "subtitle": "Folders, naming, version control, backup vs archive",
    "explain": [
      "The purpose of data organisation is to find files quickly, avoid losing or confusing them, and make collaboration easier.",
      "Techniques (from your slides): create folders and sub-folders; use meaningful file names (Document1.doc is BAD, JSmith_AIT_Task4.doc is GOOD); use version control (Smith_Essay_v1.doc, Smith_Essay_v2.doc).",
      "A backup is a copy of data you are ACTIVELY using, kept so the original can be restored if it is lost or damaged. Example: copying your AIT website task to a USB drive.",
      "An archive is a collection of HISTORICAL data that is no longer actively used, selected for long-term storage and future reference. It is usually moved out of its original location. Example: archiving your Year 8–10 work."
    ],
    "analogy": "A backup is a spare house key (protects what you use every day). An archive is an old photo album in storage (not needed daily, but you keep it).",
    "keywords": [
      [
        "folders / sub-folders / hierarchy",
        "logical storage structure"
      ],
      [
        "meaningful file naming conventions",
        "names that describe the content"
      ],
      [
        "version control (v1, v2)",
        "tracking successive versions"
      ],
      [
        "backup — copy to restore active data",
        "safeguard for current work"
      ],
      [
        "archive — long-term storage of inactive data",
        "historical data kept for reference"
      ],
      [
        "restore",
        "recover data from a copy"
      ]
    ],
    "practice": [
      {
        "q": "Compare a backup and an archive.",
        "marks": 3,
        "verb": "Compare",
        "points": [
          "Both store copies of data on a separate storage location for later use.",
          "A backup is a copy of current, actively used data, made so the original can be restored if it is lost or damaged.",
          "Whereas an archive is historical data that is no longer actively used, moved to long-term storage for future reference."
        ]
      },
      {
        "q": "Outline two data organisation techniques a student should use for their AIT project files.",
        "marks": 2,
        "verb": "Outline",
        "points": [
          "Store files in a logical folder and sub-folder structure, e.g. AIT > Task4 > Images.",
          "Use meaningful file names with version numbers, e.g. JSmith_AIT_Task4_v2.docx."
        ]
      }
    ],
    "mistakes": [
      "Saying a backup and an archive are the same thing.",
      "Giving a poor example file name (final_final2.doc)."
    ]
  },
  {
    "id": "vector-raster",
    "cat": "app",
    "src": "slides",
    "title": "Vector vs raster graphics",
    "subtitle": "Maths-based shapes vs grids of pixels",
    "explain": [
      "Vector images are made of mathematically defined lines, curves and shapes. They can be resized to any size without becoming pixelated, so they are ideal for logos, fonts and large prints such as billboards. Programs: Adobe Illustrator (proprietary), Inkscape (freeware). Formats: SVG (Scalable Vector Graphic) and CGM (Computer Graphics Metafile).",
      "Raster (bitmap) images break the picture into a grid of pixels and store the colour of each pixel. A pixel (picture element) is a single dot on the screen. Size is given as width × height (e.g. 640 × 500 px). Enlarging a raster image makes it pixelated and blurry. Raster is best for photographs with subtle colour changes.",
      "More pixels means higher resolution and a sharper image, but a larger file. A vector file's size does not change when the image is scaled up."
    ],
    "analogy": "A vector is a recipe — \"a red circle with a 5 cm radius\" — that can be redrawn at any size. A raster is a mosaic: get close enough and you see the individual tiles.",
    "keywords": [
      [
        "vector — mathematically defined lines and shapes",
        "redrawn at any size"
      ],
      [
        "scalable without distortion / pixelation",
        "stays sharp when enlarged"
      ],
      [
        "raster / bitmap — grid of pixels",
        "colour stored per pixel"
      ],
      [
        "pixel (picture element)",
        "a single dot of colour"
      ],
      [
        "resolution (width × height)",
        "number of pixels in the image"
      ],
      [
        "SVG, CGM (vector) · JPEG, GIF, PNG, TIFF, BMP (raster)",
        "formats to know"
      ]
    ],
    "practice": [
      {
        "q": "Explain why a vector graphic is the most suitable format for a company logo.",
        "marks": 3,
        "verb": "Explain",
        "points": [
          "A vector graphic is made of mathematically defined lines and shapes rather than pixels.",
          "So it can be resized to any size, from a business card to a billboard, without distortion or pixelation.",
          "This keeps the logo sharp and consistent across all print and digital uses, often with a small file size."
        ]
      },
      {
        "q": "Describe what happens when a raster image is enlarged beyond its original size.",
        "marks": 2,
        "verb": "Describe",
        "points": [
          "The fixed number of pixels is stretched over a larger area, so each pixel becomes bigger.",
          "The image becomes blurry or blocky (pixelated) and loses quality."
        ]
      }
    ],
    "mistakes": [
      "Saying vector graphics are best for photographs.",
      "Calling JPEG a vector format."
    ]
  },
  {
    "id": "image-formats",
    "cat": "app",
    "src": "slides",
    "title": "Raster file formats: JPEG, GIF, PNG, TIFF, BMP",
    "subtitle": "Strengths and weaknesses of each raster format",
    "explain": [
      "JPEG (.jpg/.jpeg): photographic quality (24-bit, about 16.7 million colours); lossy compression gives small files, so it is common on the web. No transparency. Editing and re-saving degrades quality further each time.",
      "GIF (.gif): maximum 256 colours, lossless compression, very small files. Supports transparency (one colour) and ANIMATION. Too few colours for photos; good for simple icons, banners and animations.",
      "PNG (.png): photographic quality, lossless compression, and transparency with adjustable opacity (alpha). Good for web logos and graphics on transparent backgrounds.",
      "TIFF (.tif): very high quality, usually uncompressed, supports layers. Files are HUGE, so never use it on the web. Good for print and editing.",
      "BMP (.bmp): Microsoft format, uncompressed, high quality, huge files, no layers. Because it is proprietary, TIFF is generally recommended instead."
    ],
    "analogy": "JPEG is a suitcase squashed shut (small, a few creases); PNG is carefully folded (nothing damaged); TIFF is carrying every outfit on its own hanger (perfect, but takes a lot of room).",
    "keywords": [
      [
        "JPEG — photographic, lossy, no transparency",
        "best for photos on the web"
      ],
      [
        "GIF — 256 colours, lossless, transparency, animation",
        "best for simple animation"
      ],
      [
        "PNG — lossless, transparency with opacity (alpha)",
        "best for logos on transparent backgrounds"
      ],
      [
        "TIFF — high quality, layers, huge files, print",
        "best for print and editing"
      ],
      [
        "BMP — Microsoft, uncompressed, huge files",
        "rarely the best choice"
      ],
      [
        "lossy vs lossless compression",
        "data removed vs fully restorable"
      ]
    ],
    "practice": [
      {
        "q": "A café needs (a) photos of meals for its website, (b) an animated 'Open Now' banner, and (c) its logo on a transparent background. Recommend a raster format for each and justify.",
        "marks": 6,
        "verb": "Justify",
        "points": [
          "(a) JPEG.",
          "It supports millions of colours for photographic quality while lossy compression keeps file sizes small so pages load quickly.",
          "(b) GIF.",
          "It supports simple animation with a very small file size; the 256-colour limit is fine for a simple banner.",
          "(c) PNG.",
          "It supports transparency (alpha), so the logo sits cleanly on any background, and lossless compression keeps edges sharp."
        ]
      },
      {
        "q": "Explain why TIFF files are not suitable for use on websites.",
        "marks": 2,
        "verb": "Explain",
        "points": [
          "TIFF files are usually uncompressed and very high quality, so their file sizes are huge.",
          "This would make web pages slow to load and use a lot of bandwidth, so compressed formats like JPEG or PNG are used instead."
        ]
      }
    ],
    "mistakes": [
      "Recommending GIF for photos (256 colours isn't enough).",
      "Saying JPEG supports transparency.",
      "Naming a format without linking WHY to the scenario."
    ]
  },
  {
    "id": "audio-formats",
    "cat": "app",
    "src": "slides",
    "title": "Audio formats: MP3, WAV, WMA",
    "subtitle": "MP3, WAV and WMA",
    "explain": [
      "MP3 (.mp3): the most popular format, supported by almost all software and devices. Lossy compression gives small files, perfect for storing lots of music on a phone and for streaming.",
      "WAV (.wav): the format used on audio CDs. Higher quality than MP3 but much larger files (usually uncompressed or lossless). Good for audio editing and professional recordings.",
      "WMA (.wma): Microsoft's format (Windows Media Player), designed to compete with MP3, but few programs support it, so compatibility is poor."
    ],
    "analogy": "WAV is the studio master recording; MP3 is the version squeezed down to fit on your phone.",
    "keywords": [
      [
        "MP3 — lossy, small, universally compatible, streaming",
        "best for sharing and streaming"
      ],
      [
        "WAV — high quality, large, CD audio",
        "best for editing"
      ],
      [
        "WMA — Microsoft proprietary, limited support",
        "poor compatibility"
      ],
      [
        "compatibility",
        "works across devices and software"
      ],
      [
        "bit rate / quality vs file size",
        "the trade-off in audio files"
      ]
    ],
    "practice": [
      {
        "q": "A student records a podcast. Recommend a format for editing and a format for publishing online, justifying each.",
        "marks": 4,
        "verb": "Justify",
        "points": [
          "Editing: WAV.",
          "It keeps the highest audio quality, so no quality is lost while editing and re-saving.",
          "Publishing: MP3.",
          "Its lossy compression makes files small for fast streaming/downloading, and it plays on almost all devices."
        ]
      }
    ],
    "mistakes": [
      "Saying WMA is the most compatible format."
    ]
  },
  {
    "id": "software-management",
    "cat": "app",
    "src": "slides",
    "title": "Installing & updating software",
    "subtitle": "Installation files, app stores and updates",
    "explain": [
      "Installing software is a job of the operating system (OS). Installation files used to come on CDs, DVDs or USBs; now they are usually downloaded from the internet.",
      "Installation files: .exe (executable) on Windows and .dmg (Apple Disk Image) on Mac. Software on mobile devices is called an app: iOS apps come from the App Store, Android apps from the Google Play Store.",
      "Software updates improve the software: (1) they fix bugs and glitches, (2) they improve security by patching vulnerabilities hackers could exploit, and (3) they sometimes add new features. Automatic updates can be turned off in the OS settings.",
      "Before installing, check the system requirements (CPU, RAM, storage, OS version) and only download from trusted sources."
    ],
    "analogy": "An update is like a car service: fix what's broken (bugs), check the brakes (security), and maybe add a new stereo (features).",
    "keywords": [
      [
        ".exe (Windows) / .dmg (Mac)",
        "installation file types"
      ],
      [
        "App Store (iOS) / Play Store (Android)",
        "where mobile apps come from"
      ],
      [
        "updates fix bugs and glitches",
        "reliability"
      ],
      [
        "security patches / vulnerabilities",
        "close holes hackers could use"
      ],
      [
        "new features",
        "added functionality"
      ],
      [
        "system requirements",
        "hardware/OS needed to run software"
      ]
    ],
    "practice": [
      {
        "q": "Outline three reasons why users should keep their software updated.",
        "marks": 3,
        "verb": "Outline",
        "points": [
          "Updates fix bugs and glitches so the software runs reliably.",
          "Updates patch security vulnerabilities that hackers or malware could exploit.",
          "Updates can add new features or improve performance."
        ]
      },
      {
        "q": "State the installation file type used on Windows and on macOS.",
        "marks": 2,
        "verb": "State",
        "points": [
          "Windows: .exe (executable file).",
          "macOS: .dmg (Apple Disk Image)."
        ]
      }
    ],
    "mistakes": [
      "Leaving out the security benefit of updates — it is the most important reason."
    ]
  },
  {
    "id": "licences",
    "cat": "app",
    "src": "slides",
    "title": "Software licences",
    "subtitle": "Freeware, shareware, proprietary, open and closed source",
    "explain": [
      "A software licence is a legal document that governs how software can be used and redistributed. Types: freeware, shareware, proprietary, and open/closed source.",
      "Freeware: 100% free to use and share, with no expiry. Can be open or closed source. Pros: free; often active online communities. Cons: may lack features, little tech support, infrequent updates. Examples: Adobe Reader, GIMP, Audacity, CCleaner.",
      "Shareware: free for a trial period (e.g. 30 days) or with limited features, after which you must pay. Pro: try before you buy. Example: the 30-day trial of Microsoft 365.",
      "Proprietary: copyrighted software with limits on use, distribution and modification set by the developer; it remains the owner's property (Photoshop belongs to Adobe). Pros: feature-rich, good support, frequent updates. Cons: expensive; reliant on the developer.",
      "Open source: anyone can view, modify and improve the source code. Examples: Linux (Ubuntu, Fedora), Firefox. Closed source: the source code is hidden/encrypted, and copying or modifying it is not allowed."
    ],
    "analogy": "Freeware is a free sample; shareware is a free one-week gym pass; proprietary is a rental where the owner sets the rules; open source is a community garden anyone can plant in and improve.",
    "keywords": [
      [
        "software licence — legal document governing use/redistribution",
        "the rules for using software"
      ],
      [
        "freeware — free, no expiry",
        "no cost, ever"
      ],
      [
        "shareware — trial period / limited features",
        "try before you buy"
      ],
      [
        "proprietary — copyrighted, owned by developer",
        "paid, restricted"
      ],
      [
        "open source — source code viewable and modifiable",
        "code is public"
      ],
      [
        "closed source — source code hidden/encrypted",
        "code is private"
      ]
    ],
    "practice": [
      {
        "q": "Distinguish between freeware and shareware, giving an example of each.",
        "marks": 4,
        "verb": "Distinguish",
        "points": [
          "Freeware can be used and shared completely free of charge with no expiry date.",
          "e.g. GIMP or Audacity.",
          "Shareware is free only on a trial basis (time-limited or with limited features), after which the user must pay.",
          "e.g. a 30-day trial of Microsoft 365."
        ]
      },
      {
        "q": "Discuss one advantage and one disadvantage for a small business choosing proprietary software.",
        "marks": 4,
        "verb": "Discuss",
        "points": [
          "Advantage: proprietary software is usually feature-rich with professional customer support.",
          "It also receives frequent updates and patches because users pay for it.",
          "Disadvantage: it can be expensive to buy or subscribe to.",
          "The business also relies on the developer for updates, fixes and support and cannot modify the code."
        ]
      }
    ],
    "mistakes": [
      "Saying freeware = open source. Freeware can be closed source.",
      "Defining open source only as \"free\". The key point is that the source code is open."
    ]
  },
  {
    "id": "lookup",
    "cat": "app",
    "title": "Spreadsheets: VLOOKUP & HLOOKUP",
    "subtitle": "Finding values in a reference table",
    "explain": [
      "Lookup functions automatically find a value in a reference table — for example, returning a price when a product code is entered, or a grade when a mark is entered.",
      "VLOOKUP (vertical): =VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup]). It searches DOWN the FIRST COLUMN of the table and returns the value from column number col_index in the matching row.",
      "HLOOKUP (horizontal): =HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup]). It searches ACROSS the FIRST ROW and returns the value from row number row_index in the matching column. Use it when data is arranged horizontally.",
      "range_lookup: FALSE finds an exact match (for codes and IDs) and returns #N/A if nothing matches. TRUE finds an approximate match — the largest value less than or equal to the lookup value (for mark boundaries or tax brackets). With TRUE, the first column must be sorted in ASCENDING order.",
      "Design considerations: keep the lookup table separate (another sheet or off to the side); use absolute references ($E$2:$F$6) so the range doesn't shift when the formula is copied down; use clear headings; avoid duplicate values."
    ],
    "analogy": "VLOOKUP is a phone book: run down the names (first column), find the right one, then read across to the phone number (column 2).",
    "keywords": [
      [
        "VLOOKUP — searches first column vertically",
        "vertical lookup"
      ],
      [
        "HLOOKUP — searches first row horizontally",
        "horizontal lookup"
      ],
      [
        "lookup_value / table_array",
        "what to find / where to look"
      ],
      [
        "col_index_num / row_index_num",
        "which column/row to return"
      ],
      [
        "range_lookup TRUE (approximate) / FALSE (exact)",
        "match type"
      ],
      [
        "absolute cell reference ($A$1)",
        "stays fixed when copied"
      ],
      [
        "#N/A error",
        "value not found"
      ]
    ],
    "practice": [
      {
        "q": "Product codes are in E2:E6 and prices in F2:F6. Write a VLOOKUP in C2 that returns the price for the code in B2, so it can be copied down the column.",
        "marks": 3,
        "verb": "Write",
        "code": "=VLOOKUP(B2, $E$2:$F$6, 2, FALSE)",
        "points": [
          "Correct lookup value B2 and column index 2.",
          "Absolute reference $E$2:$F$6 so the table does not move when copied down.",
          "FALSE for an exact match on product codes."
        ]
      },
      {
        "q": "Explain when you would use HLOOKUP instead of VLOOKUP.",
        "marks": 2,
        "verb": "Explain",
        "points": [
          "HLOOKUP is used when the lookup table is arranged horizontally, with the values to search in the first ROW.",
          "VLOOKUP is used when the lookup values are in the first COLUMN, arranged vertically."
        ]
      },
      {
        "q": "Explain why range_lookup is set to TRUE for a table converting marks to grades, and what condition the table must meet.",
        "marks": 3,
        "verb": "Explain",
        "points": [
          "TRUE finds an approximate match, returning the grade for the largest boundary less than or equal to the mark.",
          "This means a mark such as 73 matches the 65 boundary without every possible mark being listed.",
          "The first column (mark boundaries) must be sorted in ascending order."
        ]
      }
    ],
    "mistakes": [
      "Forgetting absolute references ($) — the range shifts when copied and errors appear.",
      "Writing the column index as a letter (C) instead of its position in the table (2)."
    ]
  },
  {
    "id": "sort-filter",
    "cat": "app",
    "title": "Spreadsheets: sort, filter & layout",
    "subtitle": "Organising data and designing usable spreadsheets",
    "explain": [
      "Sorting arranges data by one or more columns in ascending (A→Z, 0→9) or descending (Z→A, 9→0) order. A multi-level sort orders by Department first, then Surname. Always select the whole data range — sorting only one column scrambles the rows and corrupts the data.",
      "Filtering shows only the rows that meet criteria and TEMPORARILY hides the rest (nothing is deleted). Examples: only customers in Perth, price > $50, dates in 2026. Choose criteria from the AutoFilter arrows.",
      "Spreadsheet composition, layout and design: clear titles; a highlighted, frozen header row; correct number formats (currency, %, dates); input cells clearly distinguished from formula cells; lookup tables kept separate; consistent colours and fonts; print settings."
    ],
    "analogy": "Sorting is arranging library books alphabetically; filtering is saying \"only show me the science books\" — the rest stay on the shelf.",
    "keywords": [
      [
        "sort ascending / descending",
        "put rows in order"
      ],
      [
        "multi-level sort",
        "sort by several columns in turn"
      ],
      [
        "filter — hides rows not meeting criteria",
        "show matching rows only"
      ],
      [
        "criteria",
        "the conditions to match"
      ],
      [
        "header row / freeze panes",
        "headings stay visible when scrolling"
      ],
      [
        "cell formatting (currency, %)",
        "display numbers correctly"
      ]
    ],
    "practice": [
      {
        "q": "Distinguish between sorting and filtering data in a spreadsheet.",
        "marks": 2,
        "verb": "Distinguish",
        "points": [
          "Sorting rearranges all rows into an order (ascending or descending) based on one or more columns.",
          "Filtering temporarily hides rows that do not meet set criteria, displaying only matching records without deleting any."
        ]
      },
      {
        "q": "Describe two layout considerations that make a spreadsheet easy for a client to use.",
        "marks": 4,
        "verb": "Describe",
        "points": [
          "Clear headings and a formatted header row (bold, shaded, frozen panes).",
          "Users can always see what each column means while scrolling through data.",
          "Input cells are visually distinguished (e.g. coloured) from formula cells, which can be locked.",
          "This shows the client where to enter data and prevents formulas being overwritten."
        ]
      }
    ],
    "mistakes": [
      "Saying filtering deletes data."
    ]
  },
  {
    "id": "design-process",
    "cat": "pm",
    "src": "slides",
    "title": "Components of a project design process",
    "subtitle": "Purpose, audience, medium, SWOT and style guide",
    "explain": [
      "Before developing a digital product, consider five things (from your slides): product purpose and design criteria, target audience, presentation medium, situation analysis, and style guide.",
      "Product purpose: the product must do what it is designed to do — an Arts Day poster must promote the event and get more people to attend. Design criteria: the list of what must go into the product (bright colours, arts imagery, hashtags, a dominant title, date and venue, A3 size). They guide development, teamwork and the final evaluation.",
      "Target audience: who will use the product and what they are like (age, interests, needs, technical skill). Designing for the target audience maximises the product's success and profit.",
      "Presentation medium: how the product will be delivered — print (poster, brochure), audio/visual (animation, video) or interactive (website, mobile app, video game).",
      "Situation analysis: a SWOT analysis carried out at the start of the project with stakeholders (managers, staff, users) to plan and uncover risks. Strengths and Weaknesses are internal; Opportunities and Threats are external.",
      "Style guide: sets fonts, colours, logo use and button styles in advance so the product looks good and stays consistent."
    ],
    "analogy": "Planning a wedding: the purpose, who the guests are (audience), indoors or outdoors (medium), weather and budget risks (SWOT), and a colour theme (style guide).",
    "keywords": [
      [
        "product purpose",
        "what the product must achieve"
      ],
      [
        "design criteria",
        "what must be included"
      ],
      [
        "target audience characteristics",
        "who the users are"
      ],
      [
        "presentation medium (print / audio-visual / interactive)",
        "how it is delivered"
      ],
      [
        "situation analysis — SWOT",
        "strengths, weaknesses, opportunities, threats"
      ],
      [
        "style guide — consistency",
        "rules for the product's look"
      ]
    ],
    "practice": [
      {
        "q": "Explain the purpose of design criteria in a digital project.",
        "marks": 3,
        "verb": "Explain",
        "points": [
          "Design criteria list what must be included in the product, based on what the client and target audience expect.",
          "During development they tell the designer (and the whole team) exactly what to include.",
          "During evaluation the final product is checked against them to see whether everything was included."
        ]
      },
      {
        "q": "A local bakery wants a new website. Conduct a brief SWOT analysis (one point for each).",
        "marks": 4,
        "verb": "Outline",
        "points": [
          "Strength: loyal local customers and a well-known brand.",
          "Weakness: limited budget and no in-house web skills.",
          "Opportunity: online ordering and delivery to reach more customers.",
          "Threat: large competitors and delivery apps with established websites."
        ]
      },
      {
        "q": "Describe the purpose of a style guide.",
        "marks": 2,
        "verb": "Describe",
        "points": [
          "A style guide sets out in advance how the product should look, such as fonts, colours, logo use and button styles.",
          "This keeps the product visually consistent, especially when several people work on it."
        ]
      }
    ],
    "mistakes": [
      "Mixing up internal (S, W) and external (O, T) factors in a SWOT.",
      "Writing a generic SWOT with no examples from the scenario."
    ]
  },
  {
    "id": "design-plan",
    "cat": "pm",
    "src": "slides",
    "title": "Design plan: storyboard, thumbnails, wireframes",
    "subtitle": "Storyboards, thumbnails and wireframes",
    "explain": [
      "Planning shows what the product will look like before it is built; if the client is happy with the plan, development can begin.",
      "Storyboard: a sequence of pictures (frames) with written details below each one. Used for audio/visual products such as films, animations and videos; notes describe action, sound, transitions and timing.",
      "Thumbnails (hand): small, quick sketches used to explore design ideas before committing to a detailed version; many options can be compared. Thumbnail (digital): a small, scaled-down preview of a larger image or file.",
      "Wireframes/sketches: layout sketches of the product, with annotations (notes around the outside about fonts, colours, sizes and functions). Used for websites and other designs such as posters. Hand-drawn: fast, free, can be done anywhere. Digital: neat, precise, easy to edit and share."
    ],
    "analogy": "A storyboard is like a comic strip telling the story frame by frame. A wireframe is a house floor plan: the walls are there, but no paint or furniture yet.",
    "keywords": [
      [
        "storyboard — sequence of frames with written details",
        "for time-based media"
      ],
      [
        "thumbnails — small quick sketches to explore ideas",
        "early idea generation"
      ],
      [
        "wireframe — layout sketch",
        "for websites and layouts"
      ],
      [
        "annotations",
        "explanatory notes on a design"
      ],
      [
        "hand-drawn vs digital",
        "speed vs precision"
      ],
      [
        "client approval",
        "sign-off before development"
      ]
    ],
    "practice": [
      {
        "q": "Compare hand-drawn and digital wireframes.",
        "marks": 3,
        "verb": "Compare",
        "points": [
          "Both show the layout of a product before development and can include annotations.",
          "Hand-drawn wireframes are quick, cheap and need no software, making them ideal for early brainstorming.",
          "Whereas digital wireframes are neater and more accurate, and easier to edit, reuse and share with the client."
        ]
      },
      {
        "q": "State which design plan component is most suitable for planning a 30-second animated advertisement and justify.",
        "marks": 2,
        "verb": "Justify",
        "points": [
          "A storyboard.",
          "It shows the sequence of scenes frame by frame with notes about action, audio and timing, which suits a time-based audio/visual product."
        ]
      }
    ],
    "mistakes": [
      "Recommending a storyboard for planning a website — a wireframe fits better."
    ]
  },
  {
    "id": "evaluation",
    "cat": "pm",
    "src": "slides",
    "title": "Criteria to evaluate a digital product",
    "subtitle": "Functionality, cost, time, scope creep, client needs",
    "explain": [
      "Project management is about producing effective products in an organised way. Evaluation checks whether a product is effective, using five criteria (from your slides):",
      "1. Functionality: does the product work correctly? Is the interface user-friendly? Do all functions work? Any bugs, glitches or navigation problems?",
      "2. Cost: did the project come in under budget? What caused cost blowouts? How can they be controlled in future?",
      "3. Time: was it delivered on time? If not, why? What could be done better to meet the deadline next time?",
      "4. Scope creep: scope is the work needed to deliver a product with the specified features. Scope creep is uncontrolled growth in scope, such as adding features during development. It leads to budget blowouts and missed deadlines.",
      "5. Meeting client needs: does it include all design criteria, reflect the client's branding, suit the target audience, and is the client happy? The client is the person who pays for the product to be developed; the user is the person who buys or uses it."
    ],
    "analogy": "Handing over a new house: do the plumbing and power work (functionality), was it on budget (cost) and on time (time), did the owner keep asking for an extra room (scope creep), and is the owner happy (client needs)?",
    "keywords": [
      [
        "functionality / usability",
        "does it work and is it easy to use"
      ],
      [
        "cost / budget blowout",
        "spending vs budget"
      ],
      [
        "time / deadline",
        "delivered on schedule"
      ],
      [
        "scope / scope creep",
        "planned work / uncontrolled growth"
      ],
      [
        "meeting client needs / design criteria",
        "did it deliver what was asked"
      ],
      [
        "client vs user",
        "who pays vs who uses"
      ]
    ],
    "practice": [
      {
        "q": "Define scope creep and explain its impact on a project.",
        "marks": 3,
        "verb": "Explain",
        "points": [
          "Scope creep is the uncontrolled change or growth in a project's scope, such as adding extra features during development.",
          "The extra work means more time is needed, so the project may miss its deadline.",
          "It also increases costs, which can cause the budget to blow out."
        ]
      },
      {
        "q": "Distinguish between a client and a user.",
        "marks": 2,
        "verb": "Distinguish",
        "points": [
          "A client is the person or organisation that pays for the product to be developed.",
          "A user is the person who buys or uses the finished product."
        ]
      },
      {
        "q": "Describe two questions you would ask to evaluate the functionality of a website.",
        "marks": 2,
        "verb": "Describe",
        "points": [
          "Do all links, buttons and forms work as intended without errors?",
          "Is the interface user-friendly, with clear navigation so users can find information easily?"
        ]
      }
    ],
    "mistakes": [
      "Not distinguishing scope from scope creep.",
      "Treating client and user as the same person."
    ]
  },
  {
    "id": "pm-techniques",
    "cat": "pm",
    "title": "Project management techniques (Unit 2)",
    "subtitle": "Requirements, plan of action, time, resources, evaluation",
    "explain": [
      "Unit 2 covers five project management techniques: user/client requirements, plan of action, time management strategies, resource requirements and evaluation.",
      "User/client requirements: meet the client and use interviews, surveys and the design brief to establish what the product must do, who it is for and its constraints (budget, deadline).",
      "Plan of action: list the tasks, set their order and assign who is responsible for each.",
      "Time management strategies: a Gantt chart (start and end dates of each task and how they overlap), milestones, deadlines, prioritising tasks and regularly checking progress.",
      "Resource requirements: hardware (computers, cameras), software (Photoshop, web authoring tools), people and skills, budget, content (images, text) and time.",
      "Evaluation: compare the finished product against the requirements and design criteria, and gather feedback from the client and users."
    ],
    "analogy": "Like planning a trip: where you want to go (requirements), a daily itinerary (plan of action), flight times (time management), money and luggage (resources), and \"how was it?\" when you get home (evaluation).",
    "keywords": [
      [
        "user/client requirements / design brief",
        "what the product must do"
      ],
      [
        "plan of action",
        "tasks, order and responsibilities"
      ],
      [
        "Gantt chart / milestones / deadlines",
        "scheduling tools"
      ],
      [
        "resource requirements (hardware, software, people, budget)",
        "what is needed to build it"
      ],
      [
        "evaluation against requirements",
        "checking the result"
      ]
    ],
    "practice": [
      {
        "q": "Explain how a Gantt chart helps manage time in a website project.",
        "marks": 3,
        "verb": "Explain",
        "points": [
          "A Gantt chart shows each task as a bar against a timeline with start and end dates.",
          "It shows which tasks overlap or depend on others, and marks milestones and the final deadline.",
          "The team can track progress against the plan and spot delays early, so the website is finished on time."
        ]
      },
      {
        "q": "Outline three resource requirements for producing a promotional video.",
        "marks": 3,
        "verb": "Outline",
        "points": [
          "Hardware: a video camera, microphone and a computer powerful enough for editing.",
          "Software: video editing software such as Premiere Pro.",
          "People: a camera operator and editor with suitable skills (plus a budget for these)."
        ]
      }
    ],
    "mistakes": [
      "Listing only money as a resource — also mention hardware, software and people."
    ]
  },
  {
    "id": "hardware",
    "cat": "hw",
    "title": "Hardware: CPU, memory, storage, peripherals",
    "subtitle": "CPU, memory, storage, peripherals and system types",
    "explain": [
      "A computer system has input, processing, storage and output. The CPU (Central Processing Unit) is the computer's 'brain': it fetches, decodes and executes instructions. Its speed is measured by clock speed (GHz) and number of cores.",
      "Primary memory is directly accessed by the CPU. RAM temporarily holds the programs and data currently in use; it is volatile, so contents are lost when power is off. More RAM lets more programs run smoothly at once. ROM is non-volatile and stores start-up instructions (BIOS/firmware). Cache is very fast memory beside the CPU.",
      "Secondary storage keeps data permanently (non-volatile). Types: HDD (magnetic, cheap, large capacity, slower), SSD (fast, no moving parts, more expensive), USB flash drive, optical (DVD) and cloud storage.",
      "Peripheral devices: input (keyboard, mouse, scanner, microphone), output (monitor, printer, speakers) and storage (external HDD). Types of computer systems: desktop (powerful, upgradeable, not portable), mobile devices (laptop, tablet, smartphone — portable, battery-powered) and servers (provide services such as files, web and email to a network, running 24/7)."
    ],
    "analogy": "The CPU is the chef; RAM is the bench where ingredients for the current dishes sit (a bigger bench means more dishes at once); secondary storage is the fridge and pantry.",
    "keywords": [
      [
        "CPU — fetch, decode, execute",
        "processes instructions"
      ],
      [
        "clock speed (GHz) / cores",
        "measures of CPU speed"
      ],
      [
        "primary memory: RAM (volatile), ROM (non-volatile), cache",
        "memory the CPU uses directly"
      ],
      [
        "secondary storage: HDD, SSD, flash, optical, cloud",
        "permanent storage"
      ],
      [
        "peripheral devices: input / output / storage",
        "devices attached to the computer"
      ],
      [
        "desktop / mobile device / server",
        "types of computer systems"
      ]
    ],
    "practice": [
      {
        "q": "Distinguish between primary memory and secondary storage.",
        "marks": 2,
        "verb": "Distinguish",
        "points": [
          "Primary memory (e.g. RAM) is directly accessed by the CPU and holds the programs and data currently in use; RAM is volatile and loses its contents when power is off.",
          "Secondary storage (e.g. SSD, HDD) stores data permanently, is non-volatile and has a much larger capacity, but is slower to access."
        ]
      },
      {
        "q": "Describe the purpose of the CPU.",
        "marks": 2,
        "verb": "Describe",
        "points": [
          "The CPU processes all instructions and data in the computer.",
          "It repeatedly fetches, decodes and executes instructions, and controls the other components."
        ]
      },
      {
        "q": "Compare an SSD and a HDD for a student's laptop.",
        "marks": 3,
        "verb": "Compare",
        "points": [
          "Both are non-volatile secondary storage.",
          "An SSD has no moving parts, so it is faster, quieter and more durable when the laptop is moved.",
          "Whereas a HDD is cheaper per gigabyte and offers larger capacity but is slower and more easily damaged."
        ]
      }
    ],
    "mistakes": [
      "Confusing RAM with storage (e.g. \"512 GB of RAM\" for a student laptop).",
      "Getting the meaning of volatile wrong."
    ]
  },
  {
    "id": "os",
    "cat": "hw",
    "title": "Operating systems & software compatibility",
    "subtitle": "OS types, functions and compatibility issues",
    "explain": [
      "An operating system (OS) is the core software that sits between the hardware, the user and applications, and manages the computer's resources. Types: Windows (Microsoft, PCs), macOS (Apple computers), iOS (iPhone, iPad), Android (Google; many phone brands) and Linux (open source; servers; Ubuntu, Fedora).",
      "The four syllabus functions: (1) user interface (GUI with windows, icons and menus, or a command line); (2) managing system resources (CPU time, RAM, storage, printers and other devices via drivers); (3) managing security and access rights (usernames, passwords, file permissions, firewall); (4) running applications (loading, installing, multitasking).",
      "Software compatibility issues: (a) running OLDER software on current hardware/OS — the new OS may no longer support old programs or drivers (e.g. 32-bit apps); fixes include compatibility mode, virtual machines or upgrading. (b) Running NEWER software on older hardware — the CPU, RAM, GPU, storage or OS version may not meet requirements, so it won't install or runs slowly.",
      "Criteria for selecting hardware and software: the purpose (graphic design, gaming, office work), the software's minimum and recommended requirements (CPU speed, RAM, storage, GPU, OS version), budget, portability, and support and warranty."
    ],
    "analogy": "An OS is a restaurant manager: greets guests (user interface), allocates chefs and tables (resources), guards the door (security) and sends orders to the kitchen (running applications).",
    "keywords": [
      [
        "user interface (GUI / CLI)",
        "how users interact with the computer"
      ],
      [
        "managing system resources (CPU, memory, devices)",
        "allocating hardware"
      ],
      [
        "security and access rights",
        "who can do what"
      ],
      [
        "running applications / multitasking",
        "loading and running programs"
      ],
      [
        "Windows / macOS / iOS / Android / Linux",
        "types of OS"
      ],
      [
        "minimum vs recommended system requirements",
        "what's needed to run software well"
      ],
      [
        "compatibility issues",
        "software and hardware that don't work together"
      ]
    ],
    "practice": [
      {
        "q": "Outline three functions of an operating system.",
        "marks": 3,
        "verb": "Outline",
        "points": [
          "Provides a user interface (e.g. a GUI with windows and icons) so users can interact with the computer.",
          "Manages system resources such as CPU time, memory, storage and peripheral devices.",
          "Manages security and access rights through user accounts, passwords and file permissions (also: runs applications)."
        ]
      },
      {
        "q": "A school wants to install new 3D design software on five-year-old computers. Explain one compatibility issue that may occur.",
        "marks": 3,
        "verb": "Explain",
        "points": [
          "Newer software often has higher minimum hardware requirements, such as more RAM, a faster CPU or a dedicated graphics card.",
          "The old computers may not meet these requirements or may run an unsupported older OS version.",
          "As a result the software may not install, may crash, or may run too slowly to be usable."
        ]
      },
      {
        "q": "Describe two criteria for selecting a laptop for a graphic design student.",
        "marks": 4,
        "verb": "Describe",
        "points": [
          "It must exceed the recommended requirements of design software such as Photoshop.",
          "e.g. a fast multi-core CPU, at least 16 GB RAM and a dedicated graphics card.",
          "It needs a high-resolution, colour-accurate display.",
          "So that designs and colours appear correctly when editing (also: portability, budget, storage)."
        ]
      }
    ],
    "mistakes": [
      "Listing only \"installs programs\" as an OS function — learn the four syllabus functions."
    ]
  },
  {
    "id": "compression",
    "cat": "data",
    "title": "Compression & file size minimisation",
    "subtitle": "Lossy vs lossless, cropping, resampling, web vs print",
    "explain": [
      "The purpose of compression is to reduce file size so files use less storage, transfer faster over the internet and make web pages load quickly.",
      "Lossy compression PERMANENTLY removes some data (the parts least noticeable to human eyes and ears). Files become very small but quality drops and can't be recovered. Examples: JPEG, MP3, MP4.",
      "Lossless compression encodes data more efficiently so the original can be PERFECTLY restored, but it doesn't shrink files as much. Examples: PNG, GIF, ZIP, FLAC. Text, programs and documents must always use lossless compression.",
      "File size minimisation techniques: cropping (cutting away unwanted edges of an image) and resampling (reducing the number of pixels, e.g. from 4000×3000 to 1200×900). Uncompressed image size = width × height × colour depth (bits) ÷ 8 bytes.",
      "Optimisation: for digital/online use, low resolution (72–96 ppi), RGB colour mode, JPEG/PNG and small files; for print, high resolution (300 dpi), CMYK colour mode and TIFF/PDF, prioritising quality."
    ],
    "analogy": "Lossy is a book summary: shorter, but some details are gone for good. Lossless is a vacuum storage bag: smaller, but the clothes come out exactly the same.",
    "keywords": [
      [
        "purpose: reduce file size, faster transfer and loading",
        "why we compress"
      ],
      [
        "lossy — data permanently removed (JPEG, MP3)",
        "smaller, lower quality"
      ],
      [
        "lossless — original perfectly restored (PNG, ZIP)",
        "no quality loss"
      ],
      [
        "cropping / resampling",
        "trim edges / reduce pixel count"
      ],
      [
        "screen: 72 ppi, RGB · print: 300 dpi, CMYK",
        "optimisation settings"
      ],
      [
        "file size = width × height × bit depth ÷ 8",
        "file size formula"
      ]
    ],
    "practice": [
      {
        "q": "Compare lossy and lossless compression.",
        "marks": 3,
        "verb": "Compare",
        "points": [
          "Both reduce file size so files take less storage and transfer faster.",
          "Lossy compression permanently removes some data, giving much smaller files but reduced quality that cannot be recovered (e.g. JPEG, MP3).",
          "Whereas lossless compression allows the original file to be perfectly restored, but files are not reduced as much (e.g. PNG, ZIP)."
        ]
      },
      {
        "q": "Calculate the uncompressed file size of a 1200 × 800 pixel image with 24-bit colour. Show your working and give the answer in MB.",
        "marks": 3,
        "verb": "Calculate",
        "points": [
          "1200 × 800 = 960 000 pixels.",
          "960 000 × 24 bits = 23 040 000 bits ÷ 8 = 2 880 000 bytes.",
          "2 880 000 ÷ 1024 ÷ 1024 ≈ 2.75 MB (≈ 2.88 MB using 1000s is also accepted)."
        ]
      },
      {
        "q": "Explain how an image should be optimised differently for a website and for a printed brochure.",
        "marks": 4,
        "verb": "Explain",
        "points": [
          "Website: resample to the display size at a low resolution (72–96 ppi) and RGB colour mode.",
          "Save as a compressed format (JPEG/PNG) so the page loads quickly.",
          "Print: keep a high resolution (300 dpi) in CMYK colour mode.",
          "Use a high-quality format (TIFF/PDF) so the printed image is sharp and colours print accurately."
        ]
      }
    ],
    "mistakes": [
      "Saying lossless compression also reduces quality.",
      "Forgetting to divide by 8 when converting bits to bytes."
    ]
  },
  {
    "id": "data-management",
    "cat": "data",
    "title": "Online data management, version control & cloud",
    "subtitle": "Online data, version control and cloud computing",
    "explain": [
      "Strategies for managing data efficiently online: logical cloud folder structures, consistent naming conventions, correct sharing permissions (view/comment/edit), avoiding duplicate files, regular clean-ups, two-factor authentication with strong passwords, and synchronisation.",
      "Document version control makes it clear which version is the latest when several people work on one document, and stops changes being overwritten. Methods: version numbers or dates in file names (Report_2026-11-03_v3), the cloud's version history (roll back to earlier versions), check-in/check-out, track changes, and keeping a single master copy.",
      "Cloud computing means storing data and using software on remote servers over the internet rather than on your own computer (Google Drive, OneDrive, Microsoft 365, Canva). Advantages: access from anywhere on any device, real-time collaboration, automatic backups and updates, scalability, lower hardware costs. Disadvantages: depends on the internet, privacy and security risks, data held by a third party, ongoing subscription fees."
    ],
    "analogy": "The cloud is like a bank: instead of keeping cash at home, you keep it at the bank and withdraw it anywhere with your card — as long as the bank and the internet are working.",
    "keywords": [
      [
        "file naming conventions / folder structure",
        "keeping files findable"
      ],
      [
        "sharing permissions (view / edit)",
        "controlling who can change files"
      ],
      [
        "version control / version history",
        "tracking and restoring versions"
      ],
      [
        "cloud computing — data and software accessed via the internet",
        "remote storage and services"
      ],
      [
        "synchronisation",
        "keeping copies identical across devices"
      ],
      [
        "real-time collaboration",
        "several people editing at once"
      ]
    ],
    "practice": [
      {
        "q": "Discuss the use of cloud computing for a small business.",
        "marks": 4,
        "verb": "Discuss",
        "points": [
          "Advantage: staff can access files from anywhere on any device and collaborate on documents in real time.",
          "Advantage: the provider handles automatic backups and updates, reducing hardware and IT costs.",
          "Disadvantage: access depends on a reliable internet connection.",
          "Disadvantage: sensitive data is stored by a third party, raising privacy/security concerns, and there are ongoing subscription fees."
        ]
      },
      {
        "q": "Describe two strategies for efficient document version control in a team.",
        "marks": 4,
        "verb": "Describe",
        "points": [
          "Use a consistent naming convention with version numbers and dates, e.g. Proposal_v3_2026-11-03.",
          "Everyone can identify the latest version and older versions are not overwritten.",
          "Store one master copy in the cloud and use its version history/track changes.",
          "Changes by each team member are recorded and earlier versions can be restored if needed."
        ]
      }
    ],
    "mistakes": [
      "Listing only the advantages of the cloud — a Discuss question needs both sides."
    ]
  },
  {
    "id": "utilities",
    "cat": "data",
    "title": "System utilities & maintenance",
    "subtitle": "Disk clean-up, cache, defragmentation, anti-malware",
    "explain": [
      "Disk clean-up removes unnecessary files — temporary files, the recycle bin, old system files, thumbnails — freeing disk space so the computer runs faster and stays organised.",
      "Deleting temporary files/internet cache: browsers store images and files in a cache so pages load faster, but this builds up over time. Clearing it frees space, fixes outdated pages or display errors, and protects privacy on shared computers.",
      "Disk defragmentation: on an HDD, parts of a file get scattered across the disk (fragmentation). Defragmenting rearranges the pieces into contiguous blocks, so the read/write head moves less and files open faster. Not needed on SSDs and can shorten their life (SSDs use TRIM).",
      "Anti-malware, anti-virus, anti-spyware and SPAM filters detect, quarantine and remove viruses (attach to files and spread), spyware (secretly collects information) and other malware. They must be updated and scans run regularly. SPAM filters block unwanted and scam emails."
    ],
    "analogy": "Disk clean-up is tidying the house; defragmenting is pairing up the socks scattered around your drawer; anti-virus is the security guard.",
    "keywords": [
      [
        "disk clean-up — removes unnecessary files, frees space",
        "tidying storage"
      ],
      [
        "temporary files / internet cache",
        "stored browsing data"
      ],
      [
        "fragmentation / defragmentation (HDD only)",
        "reassembling scattered file pieces"
      ],
      [
        "anti-malware / anti-virus / anti-spyware",
        "protection software"
      ],
      [
        "quarantine / scan / definition updates",
        "how protection software works"
      ],
      [
        "SPAM filter",
        "blocks unwanted email"
      ]
    ],
    "practice": [
      {
        "q": "Explain how disk defragmentation improves the performance of a computer with a hard disk drive.",
        "marks": 3,
        "verb": "Explain",
        "points": [
          "Over time, parts of files are saved in scattered (fragmented) locations on the disk.",
          "Defragmentation rearranges these pieces so each file is stored in contiguous blocks.",
          "The read/write head moves less to access a file, so files open and load faster."
        ]
      },
      {
        "q": "Outline two reasons for deleting the internet cache.",
        "marks": 2,
        "verb": "Outline",
        "points": [
          "It frees up storage space taken by stored web files.",
          "It can fix display problems from outdated stored pages and protects privacy on a shared computer."
        ]
      }
    ],
    "mistakes": [
      "Saying SSDs should be defragmented."
    ]
  },
  {
    "id": "networking",
    "cat": "net",
    "title": "Networking concepts & transmission media",
    "subtitle": "Purpose, pros and cons, media and transmission rates",
    "explain": [
      "A computer network connects two or more devices to share resources and data. Purpose: sharing files, printers and the internet connection; communication (email, messaging); centralised data.",
      "Advantages: shared resources save money (one printer for everyone), file sharing and collaboration, central backups and security, software updated centrally. Disadvantages: setup and management costs, may need specialist staff, viruses spread quickly, hacking risk, and if a server or switch fails many people can't work.",
      "Transmission media: (1) Optic fibre — transmits pulses of light; fastest, long distances, no electromagnetic interference, secure, but expensive and harder to install. (2) Wired (twisted pair/Ethernet cable) — reliable, fast and cheap, but limited to about 100 m and restricts movement. (3) Wireless (Wi-Fi, Bluetooth) — radio waves; mobile and cable-free, but slower, affected by walls and interference, and less secure.",
      "Transmission rate (bandwidth) is the amount of data transferred per second: bps, Kbps, Mbps, Gbps. Higher rates mean faster downloads."
    ],
    "analogy": "Optic fibre is a freeway, Ethernet cable is a city street, and wireless is riding a bike: you can go anywhere, but it's slower and the weather matters.",
    "keywords": [
      [
        "purpose: share resources, data and communication",
        "why we network"
      ],
      [
        "advantages / disadvantages of networks",
        "the trade-offs"
      ],
      [
        "optic fibre — light pulses, fastest, no interference",
        "high-speed backbone"
      ],
      [
        "wired (twisted pair / Ethernet)",
        "reliable local connections"
      ],
      [
        "wireless (Wi-Fi) — radio waves, mobility",
        "cable-free connections"
      ],
      [
        "transmission rate / bandwidth (bps, Mbps, Gbps)",
        "speed of data transfer"
      ]
    ],
    "practice": [
      {
        "q": "Outline two advantages and two disadvantages of networking the computers in a small office.",
        "marks": 4,
        "verb": "Outline",
        "points": [
          "Advantage: resources such as printers and the internet connection can be shared, reducing costs.",
          "Advantage: files can be shared and backed up centrally, improving collaboration.",
          "Disadvantage: setting up and maintaining the network costs money and may need technical expertise.",
          "Disadvantage: viruses can spread quickly between computers, and a failure of a central device can stop everyone working."
        ]
      },
      {
        "q": "Compare optic fibre and wireless transmission media.",
        "marks": 3,
        "verb": "Compare",
        "points": [
          "Both carry data between devices on a network.",
          "Optic fibre transmits light pulses, giving very high transmission rates over long distances with no electromagnetic interference, but it is expensive to install.",
          "Whereas wireless uses radio waves, allowing mobility without cables, but it is slower, has limited range and is more affected by interference and security risks."
        ]
      }
    ],
    "mistakes": [
      "Saying optic fibre carries electrical signals — it carries light."
    ]
  },
  {
    "id": "topologies",
    "cat": "net",
    "title": "LAN topologies: star, wireless, client-server, P2P",
    "subtitle": "Star, wireless, client-server and peer-to-peer",
    "explain": [
      "Wired star topology: every device connects by its own cable to a central switch. Advantages: if one cable fails only that device is affected; easy to add devices and find faults; good performance. Disadvantages: lots of cabling; if the switch fails the whole network goes down.",
      "Wireless LAN: devices connect through a wireless access point (WAP) or wireless router. Advantages: no cables, mobility, easy for laptops, phones and guests. Disadvantages: slower, affected by walls and distance, weaker security (needs WPA2/WPA3 encryption).",
      "Client-server: a central server manages files, printing, logins, backups and security; client computers request services from it. Advantages: centralised security and backups, user access rights, suits larger networks. Disadvantages: servers and specialist staff are expensive; if the server goes down, resources can't be accessed.",
      "Peer-to-peer (P2P): all computers are equal and share their own resources directly, with no central server. Advantages: cheap, simple to set up, if one computer is off the others keep working. Disadvantages: no central security or backups, files are scattered and hard to find; only suits small networks (about 10 devices or fewer)."
    ],
    "analogy": "A star is a bicycle wheel — every spoke meets in the middle. Client-server is a school: the teacher (server) hands out materials and sets the rules. P2P is friends sharing notes directly with each other.",
    "keywords": [
      [
        "star topology — central switch",
        "every device cabled to one switch"
      ],
      [
        "single point of failure",
        "one device whose failure stops everything"
      ],
      [
        "wireless LAN / wireless access point (WAP)",
        "cable-free LAN"
      ],
      [
        "client-server — centralised resources and security",
        "server provides services"
      ],
      [
        "peer-to-peer — equal computers, no server",
        "devices share directly"
      ],
      [
        "scalability",
        "ability to grow"
      ]
    ],
    "practice": [
      {
        "q": "Compare client-server and peer-to-peer networks.",
        "marks": 4,
        "verb": "Compare",
        "points": [
          "Both allow computers on a LAN to share files and resources.",
          "In client-server, a central server manages files, security, user accounts and backups for the clients.",
          "Whereas in peer-to-peer, all computers are equal and share their own resources directly without a server.",
          "Client-server is more secure and scalable but more expensive; peer-to-peer is cheap and simple but only suits small networks."
        ]
      },
      {
        "q": "Describe one advantage and one disadvantage of a wired star topology.",
        "marks": 4,
        "verb": "Describe",
        "points": [
          "Advantage: each device has its own cable to the central switch.",
          "So if one cable fails only that device is affected, and new devices are easily added.",
          "Disadvantage: all devices depend on the central switch.",
          "If the switch fails the whole network goes down; it also needs a lot of cabling."
        ]
      },
      {
        "q": "Recommend a network type for a small accounting firm with 8 staff storing confidential client records, and justify.",
        "marks": 3,
        "verb": "Justify",
        "points": [
          "Client-server.",
          "The central server provides user accounts and access rights so confidential records are only accessible to authorised staff.",
          "It also allows centralised, automatic backups of client data, which is critical for an accounting firm."
        ]
      }
    ],
    "mistakes": [
      "Saying a P2P network has a server.",
      "Saying one broken cable takes down a whole star network."
    ]
  },
  {
    "id": "net-components",
    "cat": "net",
    "title": "Network components: server, router, NIC, switch, modem",
    "subtitle": "Server, router, NIC, switch and modem",
    "explain": [
      "The five devices a small business needs to connect to the internet:",
      "Server: a powerful computer that provides services to the network, such as file storage, printing, email, web hosting, backups and logins.",
      "Router: connects DIFFERENT networks (the office LAN and the internet) and directs data to the right destination using IP addresses. Usually also provides a firewall, DHCP (assigning IP addresses) and Wi-Fi.",
      "NIC (Network Interface Card): the hardware in each computer that connects it to the network (an Ethernet port or wireless). Each NIC has a unique MAC address.",
      "Switch: connects devices WITHIN one LAN and sends data only to the device it is addressed to (using MAC addresses), avoiding unnecessary traffic.",
      "Modem: converts the computer's digital signals into signals suitable for the ISP's line (NBN, cable, phone) — modulation — and converts incoming signals back (demodulation). It connects the business to its ISP and therefore the internet."
    ],
    "analogy": "The modem is the border crossing (translating languages), the router is the highway interchange (choosing which city to head for), the switch is the building concierge (delivering to the right door), and the NIC is each apartment's letterbox.",
    "keywords": [
      [
        "server — provides services to clients",
        "central service provider"
      ],
      [
        "router — connects networks, directs data by IP address",
        "between networks"
      ],
      [
        "NIC — connects a device to the network, MAC address",
        "device's network connection"
      ],
      [
        "switch — connects devices within a LAN",
        "inside the network"
      ],
      [
        "modem — modulates/demodulates signals to the ISP",
        "connection to the ISP"
      ],
      [
        "ISP (Internet Service Provider)",
        "company providing internet access"
      ]
    ],
    "practice": [
      {
        "q": "Describe the function of a switch and a router in a small business network.",
        "marks": 4,
        "verb": "Describe",
        "points": [
          "Switch: connects the computers, printer and server within the office LAN.",
          "It sends data only to the device it is addressed to, reducing unnecessary traffic.",
          "Router: connects the office LAN to another network, the internet.",
          "It directs data packets to the correct destination using IP addresses (and often provides a firewall)."
        ]
      },
      {
        "q": "State the purpose of a NIC.",
        "marks": 1,
        "verb": "State",
        "points": [
          "A NIC is the hardware that allows a computer to connect to a network (wired or wireless)."
        ]
      },
      {
        "q": "Explain the role of a modem.",
        "marks": 2,
        "verb": "Explain",
        "points": [
          "A modem converts (modulates) digital data from the network into signals that can travel over the ISP's line, and converts incoming signals back (demodulates).",
          "This connects the business to its Internet Service Provider and therefore to the internet."
        ]
      }
    ],
    "mistakes": [
      "Mixing up a router and a switch: a switch works inside the LAN; a router works between networks."
    ]
  },
  {
    "id": "copyright",
    "cat": "impact",
    "title": "Copyright Act 1968 & referencing",
    "subtitle": "Fair dealing, private use, moral rights, referencing",
    "explain": [
      "The purpose of the Copyright Act 1968 (Australia) is to protect creators' intellectual property (IP) — writers, artists, musicians, programmers — and give them control over how their work is copied, distributed and used, which encourages creative work. In Australia copyright applies automatically; no registration is needed.",
      "Fair dealing: using a reasonable PART of a work without permission for specific purposes — research or study, criticism or review, parody or satire, reporting news, legal advice. The source must be acknowledged.",
      "Private use: using a work you own for personal purposes, e.g. format shifting (copying a CD you bought to your phone) and time shifting (recording a TV show to watch later). Sharing or selling is not allowed.",
      "Moral rights are the creator's personal rights: (1) the right of attribution (to be named as the creator), (2) the right against false attribution (others must not claim or wrongly credit the work), and (3) the right of integrity (the work must not be altered or treated in a derogatory way). These rights cannot be sold.",
      "Referencing: acknowledge every source used in a digital product (text, images, music). Example (APA): Author. (Year). Title. Site Name. URL. Also acknowledge the IP owner by getting permission or checking Creative Commons licences."
    ],
    "analogy": "Copyright is the key to a creator's house: you need permission to go in. Fair dealing is like being allowed to photograph the house from the street for a school project.",
    "keywords": [
      [
        "Copyright Act 1968 — protects creators' intellectual property",
        "Australia's copyright law"
      ],
      [
        "fair dealing (research, study, criticism, review, parody, news)",
        "permitted limited use"
      ],
      [
        "private use (format shifting, time shifting)",
        "personal copies of works you own"
      ],
      [
        "moral rights: attribution, false attribution, integrity",
        "the creator's personal rights"
      ],
      [
        "intellectual property (IP) owner",
        "who owns the creative work"
      ],
      [
        "referencing / acknowledgement / Creative Commons",
        "crediting sources"
      ]
    ],
    "practice": [
      {
        "q": "Explain the concept of fair dealing under the Copyright Act 1968, using an example.",
        "marks": 3,
        "verb": "Explain",
        "points": [
          "Fair dealing allows a reasonable portion of a copyright work to be used without the owner's permission for specific purposes.",
          "These purposes include research or study, criticism or review, parody or satire, and reporting news.",
          "e.g. a student quoting a short section of an article in an assignment, with the source acknowledged."
        ]
      },
      {
        "q": "Outline the three moral rights given to creators.",
        "marks": 3,
        "verb": "Outline",
        "points": [
          "Right of attribution: to be named as the creator of their work.",
          "Right against false attribution: others must not claim the work as their own or wrongly credit it.",
          "Right of integrity: the work must not be altered or treated in a way that harms the creator's reputation."
        ]
      },
      {
        "q": "Reference this image in APA style: a photo titled 'Perth skyline at dusk' by J. Lee, published 2024 on Unsplash at https://unsplash.com/photos/perth-skyline.",
        "marks": 2,
        "verb": "Write",
        "code": "Lee, J. (2024). Perth skyline at dusk [Photograph]. Unsplash. https://unsplash.com/photos/perth-skyline",
        "points": [
          "Author, year and title in the correct order and format.",
          "Source (site name) and URL included."
        ]
      }
    ],
    "mistakes": [
      "Saying anything on the internet is free to use.",
      "Thinking fair dealing lets you use a WHOLE work."
    ]
  },
  {
    "id": "digital-citizenship",
    "cat": "impact",
    "title": "Digital citizenship, cyberbullying & social networking",
    "subtitle": "Responsible use, cyberbullying, work-life balance, online communities",
    "explain": [
      "Digital citizenship means using technology and the internet responsibly, ethically and safely — respecting others, protecting personal information, being aware of your digital footprint and following the law (copyright, privacy).",
      "Responsible social networking: use privacy settings, connect only with people you know, think before posting (your digital footprint is permanent and employers can see it), and don't share personal details (address, location).",
      "Forms of cyberbullying: abusive messages or comments, flaming (angry arguments), exclusion (deliberately leaving someone out of a group), impersonation (fake profiles or posing as someone), outing (revealing private information), sharing humiliating photos or videos, and cyberstalking.",
      "Strategies to manage it: don't respond, keep evidence (screenshots), block the user, report to the platform, tell a trusted adult or the school, contact the eSafety Commissioner, and tighten privacy settings.",
      "Work-life balance: technology enables flexible and remote work, but also pressure to be 'always on' (emails after hours), blurred boundaries between work and home, stress and burnout. Solutions: turning off notifications, set work hours (the right to disconnect).",
      "Types of social networking: Facebook (general), Instagram/TikTok (photos and video), LinkedIn (professional), X (short updates), YouTube (video). Virtual communities: online chat rooms (real-time text chat, e.g. Discord), virtual worlds (Roblox, Minecraft, Second Life — 3D spaces where users interact as avatars) and forums."
    ],
    "analogy": "Your digital footprint is like footprints in wet cement: once you've stepped, it's very hard to remove.",
    "keywords": [
      [
        "digital citizenship",
        "responsible, ethical, safe technology use"
      ],
      [
        "digital footprint",
        "the permanent trail you leave online"
      ],
      [
        "forms of cyberbullying (flaming, exclusion, impersonation, outing)",
        "types of online bullying"
      ],
      [
        "strategies: block, report, keep evidence, tell a trusted adult",
        "ways to respond"
      ],
      [
        "work-life balance / always connected",
        "effect of technology on personal time"
      ],
      [
        "social networking / virtual communities (chat rooms, virtual worlds)",
        "online social spaces"
      ]
    ],
    "practice": [
      {
        "q": "Outline two forms of cyberbullying and two strategies to manage it.",
        "marks": 4,
        "verb": "Outline",
        "points": [
          "Impersonation: creating a fake profile to post as the victim.",
          "Exclusion: deliberately leaving someone out of an online group chat.",
          "Block the bully and report the content to the platform.",
          "Keep evidence (screenshots) and tell a trusted adult/school or the eSafety Commissioner."
        ]
      },
      {
        "q": "Discuss the impact of digital technologies on work-life balance.",
        "marks": 4,
        "verb": "Discuss",
        "points": [
          "Positive: technology allows flexible and remote working, saving travel time and fitting work around family.",
          "Positive: cloud tools let people collaborate from anywhere.",
          "Negative: employees may feel pressure to always be available, answering emails outside work hours.",
          "This blurs the boundary between work and personal life and can increase stress and burnout."
        ]
      }
    ],
    "mistakes": [
      "Writing only the negatives of technology for work-life balance."
    ]
  },
  {
    "id": "privacy",
    "cat": "impact",
    "title": "Privacy Act 1988 & identity theft",
    "subtitle": "Collection, use, access, identity theft, safe disposal",
    "explain": [
      "The Privacy Act 1988 (Australia) regulates how government agencies and most businesses collect, use, give access to and dispose of personal information, through the Australian Privacy Principles (APPs).",
      "Collection: collect only necessary information, lawfully and fairly, and tell people why it is being collected (a privacy policy). Use: use it only for the purpose it was collected for; don't sell or disclose it to third parties without consent. Access: individuals have the right to see the information an organisation holds about them and to have it corrected.",
      "Identity theft: someone steals your personal information (name, date of birth, address, bank details) and uses it to take out loans, make purchases or commit crimes in your name. Consequences: financial loss, damaged credit rating and reputation, stress, and years to recover. Organisations must store data securely (encryption, access controls).",
      "Safe disposal of data: deleting files or formatting a drive is not enough — the data can be recovered. Methods: data-wiping or overwriting software, physically destroying drives (shredding, degaussing), shredding paper records, and professional disposal services."
    ],
    "analogy": "Personal information is like a key to your home: an organisation holding it must not copy it, must not hand it to others, and must melt it down when it's no longer needed.",
    "keywords": [
      [
        "Privacy Act 1988 / Australian Privacy Principles (APPs)",
        "Australia's privacy law"
      ],
      [
        "collection of personal information",
        "what can be gathered and how"
      ],
      [
        "use and disclosure (only for stated purpose)",
        "what it can be used for"
      ],
      [
        "access and correction",
        "your right to see and fix your data"
      ],
      [
        "identity theft",
        "someone using your identity"
      ],
      [
        "safe disposal: wiping, overwriting, physical destruction",
        "destroying data properly"
      ]
    ],
    "practice": [
      {
        "q": "Describe how the Privacy Act 1988 affects the way an online store collects and uses customer information.",
        "marks": 4,
        "verb": "Describe",
        "points": [
          "The store may only collect personal information that is necessary for its business, using fair and lawful methods.",
          "It must tell customers why the information is collected (e.g. in a privacy policy).",
          "It may only use the information for that purpose, e.g. delivering orders, and not sell it or disclose it without consent.",
          "Customers have the right to access the information held about them and to have it corrected."
        ]
      },
      {
        "q": "Explain why deleting files is not a safe way to dispose of customer data on an old computer.",
        "marks": 3,
        "verb": "Explain",
        "points": [
          "Deleting a file or formatting a drive only removes the reference to the data; the data itself remains until overwritten.",
          "It can be recovered with recovery software if the computer is sold or thrown away.",
          "So data-wiping software that overwrites the drive, or physically destroying it, should be used to prevent identity theft."
        ]
      },
      {
        "q": "Outline two implications of identity theft for a victim.",
        "marks": 2,
        "verb": "Outline",
        "points": [
          "Financial loss from loans, purchases or bank transfers made in their name.",
          "Damage to their credit rating and reputation, and long, stressful efforts to restore their identity."
        ]
      }
    ],
    "mistakes": [
      "Saying formatting a drive permanently deletes the data."
    ]
  },
  {
    "id": "digital-divide",
    "cat": "impact",
    "title": "The digital divide",
    "subtitle": "The gap in access to technology",
    "explain": [
      "The digital divide is the gap between people who have access to digital technologies and the internet (and the skills to use them) and those who do not.",
      "Availability of digital resources: rural and remote areas (such as remote WA communities) may lack fast internet and infrastructure; devices and internet plans are expensive for low-income families.",
      "Use of digital technologies: even with access, some people lack the skills (digital literacy) — e.g. older people, people with language barriers, and people with disabilities (accessibility).",
      "Availability of web-based applications: banking, government services (myGov), health and education are increasingly online, so people without internet miss out on services, job opportunities and online deals.",
      "Effects: education (online homework), job seeking, social isolation and growing economic inequality. Solutions: free Wi-Fi in public libraries, school laptop programs, NBN and satellite internet, digital literacy training."
    ],
    "analogy": "Two students: one has a laptop and fast home internet, the other does homework on a phone with limited data. They don't start from the same place.",
    "keywords": [
      [
        "digital divide — gap in access to digital technologies",
        "the core definition"
      ],
      [
        "availability of digital resources (infrastructure, cost)",
        "access to devices and internet"
      ],
      [
        "use of digital technologies / digital literacy",
        "skills to use technology"
      ],
      [
        "availability of web-based applications / online services",
        "services that are online-only"
      ],
      [
        "rural / remote / low-income / elderly",
        "groups most affected"
      ]
    ],
    "practice": [
      {
        "q": "Explain the concept of the digital divide, using an example.",
        "marks": 3,
        "verb": "Explain",
        "points": [
          "The digital divide is the gap between people who have access to, and the skills to use, digital technologies and the internet, and those who do not.",
          "e.g. families in remote WA communities may have slow or no internet and cannot afford devices.",
          "As a result they cannot easily access online learning, banking or government services such as myGov, increasing inequality."
        ]
      },
      {
        "q": "Describe one strategy that could reduce the digital divide.",
        "marks": 2,
        "verb": "Describe",
        "points": [
          "Provide free public Wi-Fi and computers in libraries and community centres.",
          "This gives people who cannot afford home internet or devices access to online services and learning."
        ]
      }
    ],
    "mistakes": [
      "Linking the digital divide only to money — also mention skills, infrastructure and age."
    ]
  },
  {
    "id": "ecommerce",
    "cat": "impact",
    "title": "E-commerce & society's dependency on technology",
    "subtitle": "Online trade and society's dependency on technology",
    "explain": [
      "Electronic commerce (e-commerce) is buying and selling goods and services over the internet (online stores, online banking, Shopify, Amazon).",
      "Improved digital communications: businesses can contact customers directly and quickly by email, chat and social media, track orders in real time, and reach markets worldwide.",
      "24/7 communications: online stores never close, so customers can buy whenever they like — but customers may also expect 24/7 responses (chatbots, pressure on staff).",
      "Online retail opportunities: low-cost store setup (less rent and fewer staff), international customers, personalised recommendations from data. Drawbacks: strong competition, delivery and returns costs, cyber threats, and customers can't see or try products in person.",
      "Issues with society's dependency on electronic and visual communication: systems or internet outages can stop a business completely, cyber attacks and data breaches, weaker face-to-face communication skills, jobs lost to automation, misinformation spreading quickly, and people without cards excluded from cashless stores."
    ],
    "analogy": "An online store is a market that never closes — but if the power (internet) goes out, every stall stops.",
    "keywords": [
      [
        "electronic commerce (e-commerce)",
        "trading online"
      ],
      [
        "24/7 communications / availability",
        "always open"
      ],
      [
        "online retail opportunities / global market",
        "reach and growth"
      ],
      [
        "lower overheads",
        "lower running costs"
      ],
      [
        "dependency — outages, cyber attacks, data breaches",
        "risks of relying on technology"
      ]
    ],
    "practice": [
      {
        "q": "Discuss the opportunities and issues of a local clothing store moving to online retail.",
        "marks": 4,
        "verb": "Discuss",
        "points": [
          "Opportunity: the store is open 24/7 and can reach customers across Australia and overseas, increasing sales.",
          "Opportunity: lower overheads than extra physical stores, plus customer data for targeted marketing.",
          "Issue: strong competition from large online retailers, plus delivery and returns costs.",
          "Issue: risk of cyber attacks/data breaches, and customers cannot try on clothes, leading to more returns."
        ]
      },
      {
        "q": "Explain one issue related to society's dependency on electronic communication in business.",
        "marks": 2,
        "verb": "Explain",
        "points": [
          "If systems fail, e.g. an internet outage or a cyber attack, businesses cannot process payments or communicate with customers.",
          "This causes lost sales and productivity because there is often no manual backup process."
        ]
      }
    ],
    "mistakes": [
      "Only listing advantages in a Discuss question."
    ]
  },
  {
    "id": "site-maps",
    "cat": "web",
    "src": "slides",
    "title": "Site maps (navigation maps)",
    "subtitle": "Planning a website's page structure",
    "explain": [
      "A site map is a visual representation of a website's page structure — a roadmap for users, designers and search engines.",
      "Two types (from your slides): (1) Visual site map — a planning tool for UX and site hierarchy, used by the web design team. (2) HTML site map — a list of page links, usually in the footer, for site visitors; it improves usability, navigation and SEO.",
      "Hierarchy: the organisational structure that arranges pages in a logical, top-down tree. Home → main pages (Store, Account, Blog) → sub-pages (Collection → Product).",
      "SEO (Search Engine Optimisation): improving a website's visibility and ranking in organic search results. Site maps help search engines find and crawl pages.",
      "Why they matter: at the planning stage they help team collaboration, UX planning (the three-click rule — any page reachable within three clicks) and spotting duplicate pages; on the live site they improve SEO and navigation. How to create one: list all pages → group content into logical categories → define the hierarchy (main pages vs sub-pages)."
    ],
    "analogy": "A site map is the directory board at a shopping centre: it shows what's on each level so you can find the shop you want quickly.",
    "keywords": [
      [
        "site map / navigation map",
        "diagram of a site's pages"
      ],
      [
        "visual site map — planning tool for the design team",
        "used before building"
      ],
      [
        "HTML site map — footer links for visitors",
        "used on the live site"
      ],
      [
        "hierarchy — top-down tree structure",
        "main pages above sub-pages"
      ],
      [
        "SEO — search engine optimisation / crawling",
        "being found in search"
      ],
      [
        "three-click rule / user experience (UX)",
        "reach any page in three clicks"
      ]
    ],
    "practice": [
      {
        "q": "Distinguish between a visual site map and an HTML site map.",
        "marks": 2,
        "verb": "Distinguish",
        "points": [
          "A visual site map is a planning tool for the web design team, showing the hierarchy of pages to plan the UX.",
          "An HTML site map is a page of links (usually in the footer) for site visitors, improving navigation and SEO."
        ]
      },
      {
        "q": "Explain two reasons why a site map is created at the planning stage.",
        "marks": 4,
        "verb": "Explain",
        "points": [
          "It helps the design team collaborate because everyone can see the same planned page structure.",
          "Developers know exactly which pages to build and how they link.",
          "It helps plan the user experience, e.g. checking every page can be reached within three clicks.",
          "It also helps identify duplicate or missing pages before development starts."
        ]
      }
    ],
    "mistakes": [
      "Confusing a site map with a wireframe: a site map shows the structure of ALL pages; a wireframe shows the layout of ONE page."
    ]
  },
  {
    "id": "web-authoring",
    "cat": "web",
    "title": "Web authoring, responsive design & online collaboration",
    "subtitle": "Hyperlinks, templates, HTML/CSS, responsive design, collaboration",
    "explain": [
      "Web authoring software (Adobe Dreamweaver, Wix, WordPress, VS Code) is used to build websites. Key features: hyperlinks (links between pages or to external sites — internal, external, email/mailto, anchor), graphics (images, logos and icons, with alt text) and templates (ready-made layouts so every page shares the same header, navigation and footer, making sites faster to build and consistent).",
      "File types: .htm/.html (HyperText Markup Language) defines a page's STRUCTURE and content (headings, paragraphs, images, links). .css (Cascading Style Sheet) defines its PRESENTATION (colours, fonts, layout). One CSS file can control every page, so a single change updates the whole site consistently.",
      "Responsive design means a web page automatically adapts its layout to the screen size (desktop, tablet, smartphone) using CSS media queries, fluid grids and flexible images — e.g. on a phone the menu becomes a hamburger icon and columns stack vertically. One site works well on every device, there is only one site to maintain, and SEO improves.",
      "Types of online collaboration: shared documents (Google Docs, Microsoft 365 — several people editing in real time), cloud storage (OneDrive, Dropbox), video conferencing (Teams, Zoom), messaging (Slack), project management tools (Trello, Asana), wikis and version control (GitHub)."
    ],
    "analogy": "HTML is the walls and rooms of a house (structure); CSS is the paint and furniture (appearance). Responsive design is like water: it takes the shape of whatever container you pour it into.",
    "keywords": [
      [
        "hyperlinks (internal / external / mailto)",
        "links between pages and sites"
      ],
      [
        "templates — consistent layout across pages",
        "reusable page design"
      ],
      [
        ".html — structure and content",
        "what's on the page"
      ],
      [
        ".css — presentation and style",
        "how the page looks"
      ],
      [
        "responsive design — media queries, fluid grids",
        "adapts to any screen"
      ],
      [
        "online collaboration (shared documents, video conferencing)",
        "working together online"
      ]
    ],
    "practice": [
      {
        "q": "Explain the different roles of HTML and CSS files in a website.",
        "marks": 3,
        "verb": "Explain",
        "points": [
          "The HTML file defines the structure and content of a page, such as headings, paragraphs, images and links.",
          "The CSS file defines how the content is presented, such as colours, fonts and layout.",
          "One CSS file can style every page, so a single change updates the whole site and keeps it consistent."
        ]
      },
      {
        "q": "Describe responsive design and explain why it is important for a business website.",
        "marks": 3,
        "verb": "Explain",
        "points": [
          "Responsive design makes a web page automatically adjust its layout to the screen size of the device, using flexible grids, images and media queries.",
          "Many customers browse on smartphones, so the site stays easy to read and navigate on any device.",
          "This improves user experience and search ranking, so customers are less likely to leave the site."
        ]
      },
      {
        "q": "Outline two benefits of using a template in web authoring.",
        "marks": 2,
        "verb": "Outline",
        "points": [
          "Every page has the same layout, navigation and branding, giving consistency.",
          "Pages can be created faster because the common elements do not have to be rebuilt each time."
        ]
      }
    ],
    "mistakes": [
      "Mixing up the roles of HTML and CSS."
    ]
  },
  {
    "id": "animation-audio",
    "cat": "web",
    "title": "Animation & audio software features",
    "subtitle": "Frame by frame, tweens, buttons; editing, converting, exporting",
    "explain": [
      "Animation software features (Adobe Animate, Animaker): frame by frame — every frame is drawn individually; detailed, artistic movement but time-consuming with larger files. Tweens (tweening) — you set the start and end keyframes and the software automatically generates the in-between frames: motion tweens (position, size, rotation) and shape tweens (one shape morphing into another); faster, smaller files, smooth motion. Buttons — interactive objects that perform an action when clicked, with up, over, down and hit states (play, pause, next page).",
      "Audio software features (Audacity, Adobe Audition): editing — cut and trim, copy, join, fade in/out, normalise volume, noise reduction, add effects. Converting — change from one format to another (WAV → MP3) and change sample rate or bit rate. Exporting — save the final file in the chosen format and quality (e.g. a 128 kbps MP3 for the web)."
    ],
    "analogy": "Frame by frame is drawing every page of a flip book by hand. Tweening is drawing the first and last pages and letting an assistant fill in the rest.",
    "keywords": [
      [
        "frame by frame animation",
        "every frame drawn individually"
      ],
      [
        "keyframes / tweening (motion tween, shape tween)",
        "software fills in between frames"
      ],
      [
        "buttons — interactive, states (up, over, down, hit)",
        "clickable controls"
      ],
      [
        "audio editing: trim, fade, normalise, noise reduction",
        "improving recordings"
      ],
      [
        "converting (format, sample rate, bit rate)",
        "changing the file type or quality"
      ],
      [
        "exporting",
        "saving the final output"
      ]
    ],
    "practice": [
      {
        "q": "Compare frame-by-frame animation and tweening.",
        "marks": 3,
        "verb": "Compare",
        "points": [
          "Both create the illusion of movement by displaying a sequence of frames.",
          "In frame-by-frame animation every frame is drawn individually, giving detailed control but taking much more time and producing larger files.",
          "Whereas in tweening the animator sets start and end keyframes and the software automatically generates the in-between frames, which is faster with smooth motion."
        ]
      },
      {
        "q": "Describe two audio editing features a student could use to improve a recorded interview.",
        "marks": 4,
        "verb": "Describe",
        "points": [
          "Trim/cut: remove unwanted sections such as long pauses and mistakes at the start and end.",
          "This makes the interview shorter and more professional.",
          "Noise reduction: remove background hum or noise from the recording.",
          "This makes the speakers' voices clearer (also: normalise volume, fade in/out)."
        ]
      }
    ],
    "mistakes": [
      "Describing tweening without mentioning keyframes."
    ]
  }
];

// Add extra variant questions here: VARIANTS[topicId] = [ ... ]
const VARIANTS = {};

const QUIZ = [
  {
    "q": "Which graphic type can be enlarged without pixelation?",
    "o": [
      "Raster",
      "Bitmap",
      "Vector",
      "JPEG"
    ],
    "a": 2,
    "why": "Vector graphics are defined mathematically, so they scale without distortion."
  },
  {
    "q": "Which is a vector file format?",
    "o": [
      "PNG",
      "SVG",
      "GIF",
      "TIFF"
    ],
    "a": 1,
    "why": "SVG = Scalable Vector Graphic. CGM is also a vector format."
  },
  {
    "q": "Which format supports animation?",
    "o": [
      "JPEG",
      "PNG",
      "GIF",
      "BMP"
    ],
    "a": 2,
    "why": "GIF supports simple animation (up to 256 colours)."
  },
  {
    "q": "Which format is best for a logo with a transparent background on a website?",
    "o": [
      "JPEG",
      "PNG",
      "BMP",
      "TIFF"
    ],
    "a": 1,
    "why": "PNG supports alpha transparency and is lossless."
  },
  {
    "q": "JPEG uses…",
    "o": [
      "Lossless compression",
      "Lossy compression",
      "No compression",
      "Vector compression"
    ],
    "a": 1,
    "why": "JPEG is lossy — some data is permanently removed."
  },
  {
    "q": "Which format is too large for the web but good for print and supports layers?",
    "o": [
      "TIFF",
      "GIF",
      "MP3",
      "SVG"
    ],
    "a": 0,
    "why": "TIFF: high quality, supports layers, huge files."
  },
  {
    "q": "All music on CDs is stored as…",
    "o": [
      "MP3",
      "WMA",
      "WAV",
      "MP4"
    ],
    "a": 2,
    "why": "CD audio is WAV: high quality, large files."
  },
  {
    "q": "The installation file type for Windows is…",
    "o": [
      ".dmg",
      ".exe",
      ".apk",
      ".svg"
    ],
    "a": 1,
    "why": ".exe (executable) on Windows; .dmg on Mac."
  },
  {
    "q": "Software free to try for 30 days, then must be paid for, is…",
    "o": [
      "Freeware",
      "Shareware",
      "Open source",
      "Public domain"
    ],
    "a": 1,
    "why": "Shareware = free for a trial period, then you pay."
  },
  {
    "q": "Software whose source code anyone can view and modify is…",
    "o": [
      "Proprietary",
      "Closed source",
      "Open source",
      "Shareware"
    ],
    "a": 2,
    "why": "Open source: the source code is public, e.g. Linux."
  },
  {
    "q": "A copy of current data made to restore it if lost is a…",
    "o": [
      "Archive",
      "Backup",
      "Template",
      "Cache"
    ],
    "a": 1,
    "why": "Backup = copy of active data; archive = historical data."
  },
  {
    "q": "VLOOKUP searches for the lookup value in the…",
    "o": [
      "First row",
      "Last column",
      "First column",
      "Any cell"
    ],
    "a": 2,
    "why": "VLOOKUP searches the first COLUMN; HLOOKUP searches the first ROW."
  },
  {
    "q": "In =VLOOKUP(B2,$E$2:$G$9,3,FALSE), FALSE means…",
    "o": [
      "Approximate match",
      "Exact match",
      "Sort descending",
      "Ignore errors"
    ],
    "a": 1,
    "why": "FALSE = exact match; returns #N/A if not found."
  },
  {
    "q": "Why use $E$2:$F$6 instead of E2:F6 in a lookup formula?",
    "o": [
      "It runs faster",
      "The range stays fixed when the formula is copied",
      "It sorts the table",
      "It hides the table"
    ],
    "a": 1,
    "why": "Absolute references keep the range fixed when the formula is copied."
  },
  {
    "q": "Filtering a spreadsheet…",
    "o": [
      "Deletes rows that don't match",
      "Temporarily hides rows that don't match",
      "Sorts rows A–Z",
      "Locks cells"
    ],
    "a": 1,
    "why": "Filtering doesn't delete rows — it temporarily hides them."
  },
  {
    "q": "Uncontrolled growth in a project's features is…",
    "o": [
      "Scope creep",
      "Cost blowout",
      "Reading gravity",
      "Fragmentation"
    ],
    "a": 0,
    "why": "Scope creep: uncontrolled growth in a project's scope."
  },
  {
    "q": "SWOT analysis is part of…",
    "o": [
      "Style guide",
      "Situation analysis",
      "Storyboard",
      "Evaluation"
    ],
    "a": 1,
    "why": "Situation analysis = SWOT, done at the start of a project."
  },
  {
    "q": "Which design plan suits an animated advertisement?",
    "o": [
      "Site map",
      "Wireframe",
      "Storyboard",
      "Gantt chart"
    ],
    "a": 2,
    "why": "A storyboard shows a sequence of frames, ideal for audio/visual products."
  },
  {
    "q": "The person who pays for a product to be developed is the…",
    "o": [
      "User",
      "Client",
      "Target audience",
      "Stakeholder only"
    ],
    "a": 1,
    "why": "The client pays; the user uses the product."
  },
  {
    "q": "Which principle uses proximity and repetition?",
    "o": [
      "Balance",
      "Unity",
      "Movement",
      "Dominance"
    ],
    "a": 1,
    "why": "Unity = proximity + repetition (syllabus)."
  },
  {
    "q": "Emphasis in the syllabus is achieved through…",
    "o": [
      "Contrast and proportion",
      "Line and shape",
      "Tone and texture",
      "Grid and alignment"
    ],
    "a": 0,
    "why": "Emphasis is achieved through contrast and proportion."
  },
  {
    "q": "The space between lines of text is called…",
    "o": [
      "Kerning",
      "Tracking",
      "Leading",
      "Alignment"
    ],
    "a": 2,
    "why": "Leading = space between lines; kerning = space between two letters."
  },
  {
    "q": "In reading gravity, where should a call-to-action go?",
    "o": [
      "Top-left",
      "Centre",
      "Bottom-right",
      "Top-right"
    ],
    "a": 2,
    "why": "The eye moves from top-left to the bottom-right terminal area."
  },
  {
    "q": "Which memory is volatile?",
    "o": [
      "ROM",
      "SSD",
      "RAM",
      "HDD"
    ],
    "a": 2,
    "why": "RAM loses its contents when the power is turned off."
  },
  {
    "q": "Which is NOT a syllabus function of an OS?",
    "o": [
      "User interface",
      "Managing system resources",
      "Designing logos",
      "Managing security and access rights"
    ],
    "a": 2,
    "why": "The four functions: UI, managing resources, security & access rights, running applications."
  },
  {
    "q": "Lossless compression…",
    "o": [
      "Permanently removes data",
      "Allows the original to be perfectly restored",
      "Is used by MP3",
      "Always gives the smallest files"
    ],
    "a": 1,
    "why": "Lossless: the original is perfectly restored, e.g. PNG, ZIP."
  },
  {
    "q": "Recommended resolution for print is about…",
    "o": [
      "72 ppi",
      "96 ppi",
      "150 ppi",
      "300 dpi"
    ],
    "a": 3,
    "why": "Print uses 300 dpi and CMYK; screens use 72 ppi and RGB."
  },
  {
    "q": "Defragmentation benefits mainly…",
    "o": [
      "SSDs",
      "Hard disk drives",
      "RAM",
      "Cloud storage"
    ],
    "a": 1,
    "why": "Defragmenting joins scattered file pieces on an HDD; SSDs don't need it."
  },
  {
    "q": "Which transmission medium uses light pulses?",
    "o": [
      "Twisted pair",
      "Wi-Fi",
      "Optic fibre",
      "Bluetooth"
    ],
    "a": 2,
    "why": "Optic fibre uses light: fastest and immune to electromagnetic interference."
  },
  {
    "q": "In a star topology, if the central switch fails…",
    "o": [
      "Only one PC is affected",
      "The whole network goes down",
      "Nothing happens",
      "Wi-Fi takes over automatically"
    ],
    "a": 1,
    "why": "The switch is a single point of failure."
  },
  {
    "q": "A network where all computers are equal and there is no server is…",
    "o": [
      "Client-server",
      "Peer-to-peer",
      "Star",
      "WAN"
    ],
    "a": 1,
    "why": "Peer-to-peer: all computers are equal, with no server."
  },
  {
    "q": "Which device connects an office LAN to the internet and directs data by IP address?",
    "o": [
      "Switch",
      "NIC",
      "Router",
      "Hub"
    ],
    "a": 2,
    "why": "A router directs data between networks using IP addresses."
  },
  {
    "q": "Which device converts signals for the ISP line?",
    "o": [
      "Modem",
      "Switch",
      "Server",
      "NIC"
    ],
    "a": 0,
    "why": "A modem modulates and demodulates signals for the ISP line."
  },
  {
    "q": "Using part of a work for criticism or review without permission is…",
    "o": [
      "Private use",
      "Fair dealing",
      "Moral rights",
      "Piracy"
    ],
    "a": 1,
    "why": "Fair dealing: research, study, criticism, review, parody, news."
  },
  {
    "q": "The right to be named as the creator is the right of…",
    "o": [
      "Integrity",
      "Attribution",
      "Fair dealing",
      "Privacy"
    ],
    "a": 1,
    "why": "Moral rights: attribution, against false attribution, integrity."
  },
  {
    "q": "Copying a CD you bought onto your own phone is an example of…",
    "o": [
      "Fair dealing",
      "Private use (format shifting)",
      "Piracy",
      "Moral rights"
    ],
    "a": 1,
    "why": "Private use includes format shifting."
  },
  {
    "q": "The gap between people with and without access to technology is the…",
    "o": [
      "Digital footprint",
      "Digital divide",
      "Scope creep",
      "Bandwidth"
    ],
    "a": 1,
    "why": "The digital divide."
  },
  {
    "q": "Which law covers how businesses collect and use personal information?",
    "o": [
      "Copyright Act 1968",
      "Privacy Act 1988",
      "Spam Act 2003",
      "WHS Act 2020"
    ],
    "a": 1,
    "why": "Privacy Act 1988 (APPs)."
  },
  {
    "q": "Animation where software generates in-between frames is…",
    "o": [
      "Frame by frame",
      "Tweening",
      "Storyboarding",
      "Rendering"
    ],
    "a": 1,
    "why": "Tweening automatically creates the frames between keyframes."
  },
  {
    "q": "Which file controls the colours and fonts of a website?",
    "o": [
      ".html",
      ".css",
      ".exe",
      ".wav"
    ],
    "a": 1,
    "why": ".css = presentation; .html = structure."
  },
  {
    "q": "A layout that adapts to phone, tablet and desktop screens uses…",
    "o": [
      "Responsive design",
      "Frame by frame",
      "Fragmentation",
      "Lossy compression"
    ],
    "a": 0,
    "why": "Responsive design uses media queries and fluid grids."
  },
  {
    "q": "An HTML site map is usually placed in the…",
    "o": [
      "Header",
      "Footer",
      "Sidebar only",
      "Source code only"
    ],
    "a": 1,
    "why": "From your slides: an HTML site map usually sits in the footer."
  },
  {
    "q": "The 'three-click rule' relates to…",
    "o": [
      "Password security",
      "Site navigation (UX)",
      "Image compression",
      "Audio editing"
    ],
    "a": 1,
    "why": "Reach any page within three clicks — planned with a site map."
  },
  {
    "q": "Uncompressed size of a 100 × 100 pixel, 24-bit image is…",
    "o": [
      "10 000 bytes",
      "30 000 bytes",
      "240 000 bytes",
      "2 400 bytes"
    ],
    "a": 1,
    "why": "100 × 100 × 24 ÷ 8 = 30 000 bytes."
  }
];

const CODE_TASKS = [
  {
    "id": "vlookup-grades",
    "title": "VLOOKUP: marks to grades",
    "marks": 4,
    "task": "Student names are in A2:A30 and marks in B2:B30. A grade table is in F2:G6: column F holds 0, 50, 65, 75, 85 and column G holds E, C, B, A-, A. Write a formula for C2 that returns the grade and can be copied down to C30. Explain your choice of range_lookup.",
    "hints": [
      "A mark of 73 isn't in the table. Do you need an exact or an approximate match?",
      "Lock the table range with $ signs.",
      "The grade is in the 2nd column of the table."
    ],
    "solution": "=VLOOKUP(B2, $F$2:$G$6, 2, TRUE)\n\nTRUE (approximate match) is used because marks fall BETWEEN the boundaries:\na mark of 73 returns the grade for the largest boundary ≤ 73 (65 → B).\nThe boundaries in F2:F6 must be sorted in ascending order.",
    "points": [
      "Correct lookup value B2.",
      "Absolute range $F$2:$G$6.",
      "Column index 2.",
      "TRUE with a correct justification (approximate match for ranges; first column sorted ascending)."
    ]
  },
  {
    "id": "hlookup-shipping",
    "title": "HLOOKUP: delivery fees",
    "marks": 3,
    "task": "H1:K1 holds delivery regions (Metro, Regional, Remote, Interstate) and H2:K2 holds the fees ($8, $12, $20, $15). An order's region is in B5. Write a formula for C5 that returns the delivery fee.",
    "hints": [
      "The data is horizontal: regions are in the first ROW.",
      "Which row of the table holds the fee?",
      "Region names must match exactly."
    ],
    "solution": "=HLOOKUP(B5, $H$1:$K$2, 2, FALSE)",
    "points": [
      "Uses HLOOKUP because the table is horizontal.",
      "Correct absolute table range and row index 2.",
      "FALSE for an exact match on region names."
    ]
  },
  {
    "id": "file-size",
    "title": "Calculating file size",
    "marks": 4,
    "task": "A photo is 4000 × 3000 pixels with 24-bit colour. (a) Calculate its uncompressed size in MB. (b) If it is resampled to 1200 × 900 for a website banner, what is the uncompressed size? (c) Which format would you recommend for the web?",
    "hints": [
      "Size = width × height × bit depth ÷ 8 bytes.",
      "To convert bytes to MB, divide by 1024 twice.",
      "Photo + web → a lossy format."
    ],
    "solution": "(a) 4000 × 3000 = 12 000 000 pixels\n    12 000 000 × 24 ÷ 8 = 36 000 000 bytes\n    36 000 000 ÷ 1024 ÷ 1024 ≈ 34.3 MB\n\n(b) 1200 × 900 = 1 080 000 pixels\n    1 080 000 × 3 bytes = 3 240 000 bytes ≈ 3.09 MB (≈ 11x smaller)\n\n(c) JPEG — lossy compression reduces it further (typically to a few hundred KB)\n    while keeping photographic quality, so the page loads quickly.",
    "points": [
      "Correct pixel count and bits → bytes conversion.",
      "Correct answer in MB for (a).",
      "Correct resampled size for (b).",
      "JPEG recommended with a justification linked to web loading."
    ]
  },
  {
    "id": "format-choice",
    "title": "Choosing file formats",
    "marks": 6,
    "task": "For the school Arts Festival you need: (1) a brand logo printed from A3 up to billboard size, (2) a stage photo for Instagram, (3) an A3 poster sent to the printer with layers kept, (4) an animated 'Tickets on sale' icon for the website, (5) a 20-minute podcast published online. Recommend a format for each and justify it in one sentence.",
    "hints": [
      "A logo used at many sizes → a format that scales without distortion.",
      "Print + layers → a large but high-quality format.",
      "Online audio → small and compatible."
    ],
    "solution": "(1) SVG — vector, scales to any size (A3 to billboard) without pixelation.\n(2) JPEG — photographic colours with small lossy file for fast upload/display.\n(3) TIFF — very high quality and supports layers, ideal for professional print.\n(4) GIF — supports simple animation with a tiny file size.\n(5) MP3 — lossy compression gives a small file that streams and plays on almost every device.",
    "points": [
      "SVG (or CGM) for the logo with vector justification.",
      "JPEG for the photo.",
      "TIFF for print with layers.",
      "GIF for the animation.",
      "MP3 for the podcast.",
      "Each justified with a specific property (1 mark overall for quality of justifications)."
    ]
  },
  {
    "id": "site-map-cafe",
    "title": "Draw a site map: café",
    "marks": 4,
    "task": "The \"Bean There Café\" website has: Home, Menu (Breakfast, Lunch, Drinks), About (Our Story, Team), Order Online (Cart, Checkout), Contact and Gallery. Draw the site map as a hierarchy (in text) and explain whether it meets the three-click rule.",
    "hints": [
      "Home is the top level.",
      "Main pages are level 2; sub-pages are level 3.",
      "How many clicks from Home to Checkout?"
    ],
    "solution": "Home\n├── Menu\n│   ├── Breakfast\n│   ├── Lunch\n│   └── Drinks\n├── About\n│   ├── Our Story\n│   └── Team\n├── Order Online\n│   ├── Cart\n│   └── Checkout\n├── Gallery\n└── Contact\n\nEvery page is at most 2 clicks from Home (e.g. Home → Order Online → Checkout),\nso the three-click rule is met.",
    "points": [
      "Home at the top level.",
      "Five main pages at the second level.",
      "Sub-pages correctly grouped under their parent pages.",
      "Three-click rule explained correctly."
    ]
  },
  {
    "id": "lan-design",
    "title": "Design a LAN",
    "marks": 5,
    "task": "A small accounting firm has 6 staff desktops, 1 network printer, a server holding confidential client files, needs guest Wi-Fi and has an NBN connection. Recommend a suitable LAN topology (in text), and list the devices needed and their roles.",
    "hints": [
      "Confidential files and central backups → which network type?",
      "Where do the wired devices connect?",
      "How does the office reach the internet? How are guests kept separate?"
    ],
    "solution": "Wired STAR, CLIENT-SERVER network:\n\nNBN line → MODEM → ROUTER (firewall, guest Wi-Fi on separate network)\n                       │\n                    SWITCH ── SERVER (client files, user accounts, backups)\n                    │  │  │\n            6 desktops (each with a NIC) + network printer\n\n- Modem: connects the office to the ISP (NBN).\n- Router: links the LAN to the internet, directs traffic by IP address, firewall,\n  separate guest Wi-Fi so visitors cannot reach the server.\n- Switch: central device of the star; sends data only to the intended device.\n- Server: stores confidential files with access rights and central backups.\n- NIC: in every desktop/printer to connect it to the network.",
    "points": [
      "Star topology with a central switch.",
      "Client-server justified by confidential data/central security and backups.",
      "Modem and router correctly placed and described.",
      "Server and NICs included with roles.",
      "Guest Wi-Fi separated from the business network."
    ]
  },
  {
    "id": "annotate-poster",
    "title": "Annotate a poster design",
    "marks": 6,
    "task": "You are planning an A3 poster for a youth music festival. Write six annotations for the wireframe: 2 elements of design, 2 principles of design, 1 typography choice and 1 composition rule. Link each to the target audience.",
    "hints": [
      "Elements: colour, line, shape, texture…",
      "Principles: emphasis, dominance, unity, balance…",
      "Composition: rule of thirds or reading gravity."
    ],
    "solution": "1. Colour (element): bright neon pink and blue on a dark background — energetic, appeals to a teenage audience.\n2. Line (element): diagonal lines behind the headline create a sense of movement and rhythm like music.\n3. Dominance (principle): the festival name is the largest item so it is noticed first.\n4. Unity (principle): the same two colours and icon style are repeated in every section, tying the poster together.\n5. Typography: bold sans serif display typeface for the heading, legible from a distance; body in a clean sans serif.\n6. Rule of thirds (composition): the performer image sits on the top-right intersection; date and ticket QR code are bottom-right (reading gravity terminal area).",
    "points": [
      "Two correctly named elements with purpose.",
      "Two correctly named principles with purpose.",
      "Typography choice justified.",
      "Composition rule applied correctly.",
      "Links to the target audience.",
      "Specific, poster-based annotations rather than definitions."
    ]
  },
  {
    "id": "reference",
    "title": "Referencing sources",
    "marks": 3,
    "task": "Your assignment used: (1) an article by Sarah Kim, \"How teens use social media\" (2025), from the ABC News website, https://www.abc.net.au/news/teens-social-media; (2) a photo titled \"Concert crowd\" (2023) with no named author, from Pixabay, https://pixabay.com/photos/concert-crowd. Reference both in APA style and explain in one sentence why referencing is required.",
    "hints": [
      "Author, A. (Year). Title. Site. URL",
      "With no author, start with the title.",
      "Think copyright and acknowledging the IP owner."
    ],
    "solution": "Kim, S. (2025). How teens use social media. ABC News.\n    https://www.abc.net.au/news/teens-social-media\n\nConcert crowd [Photograph]. (2023). Pixabay.\n    https://pixabay.com/photos/concert-crowd\n\nReferencing acknowledges the intellectual property owner, avoids plagiarism\nand respects the creator's moral right of attribution under the Copyright Act 1968.",
    "points": [
      "Correct article reference (author, year, title, site, URL).",
      "Correct image reference starting with the title when no author is given.",
      "Valid reason linked to IP/copyright/moral rights."
    ]
  }
];
