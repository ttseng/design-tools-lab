# Design Tools Lab Website

This is the source code for the [Design Tools Lab](https://designtoolslab.org) in Barnard College's Computer Science Department.

It's built with [11ty](https://www.11ty.dev).

## Setup
1. Clone this repo 
```bash
git clone git@github.com:ttseng/design-tools-lab.git
````

2. Install the requirements
```bash
npm install
```

3. Run & open locally
```bash
npm start
```

## Adding new people
Copy the example in `src/people/tiffany_tseng.md` to add your info.  Add a headshot to `src/assets/images/people` and include this in your markdown file.

## Adding new publications
Copy any of the markdown examples in `src/publications`

You can add these properties:

| Property | Description | Required | Example |
| ----------- | ----------- | ----------- | ----------- |
| title | title of paper | ✅ |"Collaborative Machine Learning Model Building with Families Using Co-ML" |
| authors | comma separated author list | ✅ | "Tiffany Tseng, Yumiko Murai, Natalie Freed, Deanna Gelosi, Tung D Ta, Yoshihiro Kawahara" |
| description | snippet of astract | ✅ | "This paper presents PlushPal, a web-based design tool for children to make plush toys interactive with machine learning (ML)." |
| conference | name of venue / journal | ✅ | "IDC" |
| date | date published (note - needed for correct sorting) | ✅ | 2021-06-24 |
| year | year published | ✅ | 2021 |
| img | path to thumbnail image | ✅ | "assets/images/publications/plushpal.png" |
| video | link to a video | | "https://www.youtube.com/watch?v=f4w3Z09Ka7A" |
| presentation | link to presentation video | | "https://www.youtube.com/watch?v=Pez3hD0dRVU" | 
| areas | array of research areas for tagging purposes (can choose from machine-learning, electronics, design-documentation, and visual-arts) | | ["machine-learning", "electronics"] |
| presentation | link to presentation video | | "https://www.youtube.com/watch?v=Pez3hD0dRVU" |
| award | description of any associated paper awards | | "best paper" |

```
---
title: "title of the paper"
authors: "comma separated, author list"
description: "snippet of abstract"
conference: "conference name"
date: 2024-02-08
year: 2024
img: "assets/images/publications/keyframer.gif"
doi: "https://arxiv.org/pdf/2402.06071"
video: "https://machinelearning.apple.com/research/keyframer"
areas: ["machine-learning", "visual-arts"]
---
```