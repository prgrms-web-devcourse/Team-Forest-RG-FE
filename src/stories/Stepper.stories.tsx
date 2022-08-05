import React, { useRef, forwardRef, useEffect } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useForm, SubmitHandler } from "react-hook-form";
import Stepper from "@/components/Stepper";
import Input from "@/components/Input";

export default {
  title: "MUI/Stepper",
  component: Stepper,
} as ComponentMeta<typeof Stepper>;

const steps = ["처음", "두번째", "세번째", "네번째"];

const contents = [
  <div>처음</div>,
  <div>두번째</div>,
  <div>세번째</div>,
  <div>네번째</div>,
];

const FinishedContent = <div>완료</div>;

export const Default: ComponentStory<typeof Stepper> = () => (
  <div style={{ width: "100%" }}>
    <Stepper
      steps={steps}
      contents={contents}
      finishedContent={FinishedContent}
    />
  </div>
);

interface FormProps {
  store: any;
  onSubmit: SubmitHandler<any>;
}

const Form1 = forwardRef<HTMLFormElement, FormProps>(
  ({ store, onSubmit }, ref) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<{ test1?: string }>({
      defaultValues: store,
    });

    return (
      <form onSubmit={handleSubmit(onSubmit)} ref={ref}>
        <Input
          {...register("test1", { required: "필수 데이터" })}
          error={!!errors?.test1}
          errorMessage={errors?.test1?.message}
        />
      </form>
    );
  }
);

const Form2 = forwardRef<HTMLFormElement, FormProps>(
  ({ store, onSubmit }, ref) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<{ test2?: string }>({
      defaultValues: store,
    });

    return (
      <form onSubmit={handleSubmit(onSubmit)} ref={ref}>
        <Input
          {...register("test2", { required: "필수 데이터" })}
          error={!!errors?.test2}
          errorMessage={errors?.test2?.message}
        />
      </form>
    );
  }
);

const Form3 = forwardRef<HTMLFormElement, FormProps>(
  ({ store, onSubmit }, ref) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<{ test3?: string }>({
      defaultValues: store,
    });

    return (
      <form onSubmit={handleSubmit(onSubmit)} ref={ref}>
        <Input
          {...register("test3", { required: "필수 데이터" })}
          error={!!errors?.test3}
          errorMessage={errors?.test3?.message}
        />
      </form>
    );
  }
);

const Form4 = forwardRef<HTMLFormElement, FormProps>(
  ({ store, onSubmit }, ref) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<{ test4?: string }>({
      defaultValues: store,
    });

    return (
      <form onSubmit={handleSubmit(onSubmit)} ref={ref}>
        <Input
          {...register("test4", { required: "필수 데이터" })}
          error={!!errors?.test4}
          errorMessage={errors?.test4?.message}
        />
      </form>
    );
  }
);

export const WithReactHookForm: ComponentStory<typeof Stepper> = () => {
  const [store, setStore] = React.useState({
    test1: "",
    test2: "",
    test3: "",
    test4: "",
  });
  const ref1 = useRef<HTMLFormElement>(null);
  const ref2 = useRef<HTMLFormElement>(null);
  const ref3 = useRef<HTMLFormElement>(null);
  const ref4 = useRef<HTMLFormElement>(null);

  useEffect(() => {
    console.log(store);
  }, [store]);

  const onSubmit = (data: any) => {
    console.log(data);
    setStore(data);
  };

  const onFinalSubmit = async () => {
    ref4?.current?.dispatchEvent(new Event("submit", { cancelable: true }));
    // console.log(store);
  };

  const CONTENTS = [
    <Form1 store={store} onSubmit={onSubmit} ref={ref1} />,
    <Form2 store={store} onSubmit={onSubmit} ref={ref2} />,
    <Form3 store={store} onSubmit={onSubmit} ref={ref3} />,
    <Form4 store={store} onSubmit={onSubmit} ref={ref4} />,
  ];

  return (
    <Stepper steps={steps} contents={CONTENTS} onFinalSubmit={onFinalSubmit} />
  );
};
