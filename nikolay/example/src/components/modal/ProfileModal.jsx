import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Modal, Box } from '@mui/material';
import { GoPaperclip } from "react-icons/go";

import { StyledPurpleButton, StyledWhiteButton } from '../button/LinkBtn';
import { styles } from "../../styles";
import SkillButtons from "../button/SkillButtons";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 700,
  minWidth: 350,
  overflow: 'scroll',
  height: '600px',
  border: '2px solid #eaeaea',
  boxShadow: 24,
  pl: 8,
  pr: 8,
  pt: 3,
  pb: 3,
};

export default function ProfileModal() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    telephone: '',
    telegram: '',
    email: "",
    topic: '',
    file: '',
    description: "",
  });

  const ProfileData = [
    {
      title: 'name',
      value: form.name,
      placeholder: 'ваше имя'
    },
    {
      title: 'telephone',
      value: form.telephone,
      placeholder: 'ваш телефон',
    },
    {
      title: 'telegram',
      value: form.telegram,
      placeholder: 'ваш telegram',
    },
    {
      title: 'email',
      value: form.email,
      placeholder: 'ваш email',
    },
  ]

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };


  return (
    <div>
      <div onClick={handleOpen}>
        <StyledPurpleButton >Lorem ipsum</StyledPurpleButton>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={style}
        className="bg-secondary p-4 t-50"
      >
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col'
        >
          <div>
            <h1 className={styles.sectionHeadText}>оставьть ваш запрос</h1>
            <p className={`${styles.sectionSubText} pt-[20px]`} style={{ color: 'var(--dark-gray)' }}>Lorem ipsum dolor sit amet, consectetuer</p>
          </div>
          <div>
            <h1 className={styles.heroHeaderText}>тема topic</h1>
            <SkillButtons />
          </div>

          <label className='flex flex-col'>
            <h6 className='text-[18px] font-bold cursor-pointer pt-5 pb-3'>Василий Петров</h6>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='текстовое описание'
              className='bg-third py-4 px-6 placeholder:text-secondary text-tertiary rounded-lg outline-none border-none font-medium'
            />
            <div className="pt-2">
              <StyledWhiteButton><span className="flex flex-row items-center">прикрепить файл &nbsp;<GoPaperclip /></span></StyledWhiteButton>
            </div>
          </label>

          <div>
            <h6 className='text-[18px] font-bold cursor-pointer pt-5 pb-3'>контактные данные</h6>
            <div>
              {
                ProfileData.map((item, index) => {
                  return (
                    <input
                      key={index}
                      type='text'
                      name={item.title}
                      value={item.value}
                      onChange={handleChange}
                      placeholder={item.placeholder}
                      className='bg-third lg:w-[48%] md:w-[100%] py-4 px-6 m-1 placeholder:text-secondary text-tertiary rounded-lg outline-none border-none font-medium'
                    />
                  )
                })
              }
            </div>
            <div className="flex flex-row">
              <input type="checkbox" className="cursor-pointer" />
              <h6 className="p-2">Отправляя форму, вы соглашаетесь на обработку &nbsp;<b><a href="" className="cursor-pointer">персоналных данных</a></b></h6>
            </div>
          </div>

          <div
            type='submit'
            className='shadow-md shadow-primary'
          >
            <StyledPurpleButton>{loading ? "Sending..." : "Send"}</StyledPurpleButton>
          </div>
        </form>
      </Modal>
    </div>
  );
}
