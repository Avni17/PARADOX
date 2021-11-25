### PARADOX website

Paradox is a web-based project tracking application that will allow you to track the
time that employees or colleagues spend working on projects and tasks.

• This application will keep track of projects in a company.

• It lets employee track how much time and man hours are needed to be spent on projects and update the
same through a GUI.

• Project phases and milestones can be assigned to staff 

• Project members can see progress in dashboard.

• Manager or project lead can then add resources to compensate for time delay and increases bandwidth.

• Non-critical tasks can be removed and forces can be shifted towards more crucial tasks.

• Information displayed through dashboard will be according to user’s individual needs-(by
worker,manager,teamLead).

### Project Info

This project uses [React.Js](https://reactjs.org) and the contents are bundled using webpack.

The contents in this project follow the following structure.

```
├───public
│   └───images
│
└───src
    ├──components
    │   ├───login
    │   ├───dashboard
    │   ├───
    │ 
    │
    │
    └───shared_components
        ├───button
        └───sidebar
```

Each individual section and component, follows this structure

```
section
  ├──components
  └──styles
```

#### Constants

This project uses 'Roboto' as it's primary font, with weights of 300, 400, 500 and 700. All the fonts have been pre-imported.

Moreover, here are a few constants which are used throughout the project, and have been added to the root of css, use them accordingly.

```
font-size: 16px;
--bg-primary: #ffffff;
--bg-secondary: #f5f5f5;
--text-primary: #000000;
--text-secondary: #202124;
--btn-primary: #0005df;
--btn-secondary: #ffffff;
--focused-state: #c2c3f7;
--transition-speed: 250ms;
--sidebar-width: 5rem;
```

## Setup

##### Clone the repository

```bash
git clone https://github.com/Avni17/PARADOX.git
```

##### Move to the desired folder

```bash
cd \PARADOX
```

##### To install the dependencies, simply write

```bash
npm install
```

##### To run the app, simply write

```bash
npm start
```
##### To run php files, simply 


```bash
COPY paradox foler in

htdocs (for XAMPP)

www    (for WAMPP)

START APACHE AND MYSQL SERVER
```


