import React from 'react';
import Footer from 'rc-footer';
import { CiCirclePlus } from "react-icons/ci";
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';

const Footer_impl = () => {
  const columns = [
    {
      icon: <CiCirclePlus />,
      title: 'Hashir Ali',
      items: [
        { title: ' 1', url: '#', description: 'Designing', openExternal: true },
        { title: ' 2', url: '#', description: 'Conversion to Next.js ', openExternal: true },
        { title: ' 3', url: '#', description: 'Debugging', openExternal: true },
      ]
    },
    {
      icon: <CiCirclePlus />,
      title: 'Abrar Shah',
      items: [
        { title: '1', url: '#', description: 'Chart integration', openExternal: true },
        { title: '2', url: '#', description: 'Setting styles in css', openExternal: true },
        { title: '3', url: '#', description: 'Creating the html structure', openExternal: true },
      ]
    },
    {
      icon: <CiCirclePlus />,
      title: 'Aly Rahim',
      items: [
        { title: '1', url: '#', description: 'Developing the data cards', openExternal: true },
        { title: '2', url: '#', description: 'Design Research', openExternal: true },
        { title: '3', url: '#', description: 'gathering resources', openExternal: true },
      ]
    },
    {
      icon: <CiCirclePlus />,
      title: 'Ehsan ul Haque',
      items: [
        { title: '1', url: '#', description: 'Content writing', openExternal: true },
        { title: '2', url: '#', description: 'Generating slogans', openExternal: true },
        { title: '3', url: '#', description: 'Gathering info about coins', openExternal: true },
      ]
    }
  ];

  return (
  
   
     <Footer
      columns={columns.map((column, index) => ({
        icon: column.icon,
        title: column.title,
        items: column.items.map((item, idx) => ({
          title: item.title,
          url: item.url,
          description: item.description,
          openExternal: item.openExternal,
          key: `${index}-${idx}`, // Unique key for each item
        }))
      }))}
      bottom="ICT PROJECT BY HASHIR, ABRAR, ALY, EHSAN"
    />
  
  );
};

export default Footer_impl;
