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
        { title: 'Item 1', url: '#', description: 'Description 1', openExternal: true },
        { title: 'Item 2', url: '#', description: 'Description 2', openExternal: true },
        { title: 'Item 3', url: '#', description: 'Description 3', openExternal: true },
      ]
    },
    {
      icon: <CiCirclePlus />,
      title: 'Abrar Shah',
      items: [
        { title: 'Item A', url: '#', description: 'Description A', openExternal: true },
        { title: 'Item B', url: '#', description: 'Description B', openExternal: true },
        { title: 'Item C', url: '#', description: 'Description C', openExternal: true },
      ]
    },
    {
      icon: <CiCirclePlus />,
      title: 'Aly Rahim',
      items: [
        { title: 'Item X', url: '#', description: 'Description X', openExternal: true },
        { title: 'Item Y', url: '#', description: 'Description Y', openExternal: true },
        { title: 'Item Z', url: '#', description: 'Description Z', openExternal: true },
      ]
    },
    {
      icon: <CiCirclePlus />,
      title: 'Ehasan ul Haq',
      items: [
        { title: 'Item X', url: '#', description: 'Description X', openExternal: true },
        { title: 'Item Y', url: '#', description: 'Description Y', openExternal: true },
        { title: 'Item Z', url: '#', description: 'Description Z', openExternal: true },
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
      bottom="Made by HAEA"
    />
  
  );
};

export default Footer_impl;
