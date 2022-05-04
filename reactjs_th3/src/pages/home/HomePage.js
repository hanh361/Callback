import React, {
    useState,
    useMemo,
    useEffect,
    useCallback,
    StyleSheet,
  } from "react";
  import React, { useState, useMemo, useEffect, useCallback } from "react";
  import Button from "./../../components/commons/Button";
  import Input from "./../../components/commons/Input";
  import Text from "./../../components/commons/Text";
  import useCalculate from "./../../untils/useCalculate";
  import "./../../assets/css/style.css";
  import { useForm } from "react-hook-form";
  import * as yup from "yup";
  import { yupResolver } from '@hookform/resolvers/yup';
  
  const schema = yup.object({
    fullName: yup.string().required().min(5, 'Cần 5 ký tự'),
    age: yup.number().required().min(5, 'Cần 5 ký tự'),
  }).required();
  
  const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
      resolver: yupResolver(schema)
    });
  
  const onSubmit = data => {
      console.log(data);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      setValue("name", '');
      setValue("age", null);
    };
  
  
    return (
      <div className="wrapper">
        {loading ? (
          <h1>
            {" "}
            <Text text="Load" />
          </h1>
        ) : (
          <div>
            <Text colorText="blue" bg="white" text="Loading" />
            <Text colorText="red" bg="white" text="Loading" />
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                style={{ marginBottom: '2rem' }}
                {...register("name")}
                placeholder="Tên"
              />
              <p>{errors.name?.message}</p>
              <br />
              <input
                placeholder="Tuổi"
                type="number"
                {...register("age")}
                style={{ marginBottom: '2rem' }}
              />
              <p>{errors.age?.message}</p>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    );
  };
  
  export default HomePage;

export default HomePage;