'use client';
//Hooks
import React, { useState, useEffect } from 'react';
//Style
import styles from './styles.module.scss';
//Components
import Form from './Form';


const ContactForm = ({pagePath}) => {





  return (
    <div  className={styles.mainWrapper}>

      <div className={styles.container}>
        <h1 className={styles.title}>Контакты</h1>
        <div className={styles.greetContainer}>
        <p className={styles.textContent}>Привет!</p>
        <p className={styles.textContent}>Поделись мнением о нас.</p>
        </div>
       
        <Form />
        <div className={styles.textContainer}>
        <p className={styles.textContent}>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates
        nisi voluptatum quam voluptatem laboriosam? Commodi nam aut velit fuga, quis
            nihil quisquam itaque eos tempore veniam accusantium porro cum.
        </p>
        <p className={styles.textContent}>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates
        nisi voluptatum quam voluptatem laboriosam? Commodi nam aut velit fuga, quis
            nihil quisquam itaque eos tempore veniam accusantium porro cum.
        </p>
        <p className={styles.textContent}>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates
        nisi voluptatum quam voluptatem laboriosam? Commodi nam aut velit fuga, quis
            nihil quisquam itaque eos tempore veniam accusantium porro cum.
        </p>
        <p className={styles.textContent}>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates
        nisi voluptatum quam voluptatem laboriosam? Commodi nam aut velit fuga, quis
            nihil quisquam itaque eos tempore veniam accusantium porro cum.
        </p>
        <p className={styles.textContent}>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates
        nisi voluptatum quam voluptatem laboriosam? Commodi nam aut velit fuga, quis
            nihil quisquam itaque eos tempore veniam accusantium porro cum.
        </p>
        <p className={styles.textContent}>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates
        nisi voluptatum quam voluptatem laboriosam? Commodi nam aut velit fuga, quis
            nihil quisquam itaque eos tempore veniam accusantium porro cum.
        </p>
        <p className={styles.textContent}>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates
        nisi voluptatum quam voluptatem laboriosam? Commodi nam aut velit fuga, quis
            nihil quisquam itaque eos tempore veniam accusantium porro cum.
        </p>
        <p className={styles.textContent}>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates
        nisi voluptatum quam voluptatem laboriosam? Commodi nam aut velit fuga, quis
            nihil quisquam itaque eos tempore veniam accusantium porro cum.
        </p>
        <p className={styles.textContent}>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates
        nisi voluptatum quam voluptatem laboriosam? Commodi nam aut velit fuga, quis
            nihil quisquam itaque eos tempore veniam accusantium porro cum.
        </p>
        <p className={styles.textContent}>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates
        nisi voluptatum quam voluptatem laboriosam? Commodi nam aut velit fuga, quis
            nihil quisquam itaque eos tempore veniam accusantium porro cum.
        </p>

    </div>
      </div>
    </div>
  );
};

export default ContactForm;
