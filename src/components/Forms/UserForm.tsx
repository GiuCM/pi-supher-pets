import { useState } from "react";
import { ButtonUser } from "../Buttons/ButtonUser";
import { RegisterForm } from "./RegisterForm";
import { LoginForm } from "./LoginForm";
import { RecoverPasswordForm } from "./RecoverPasswordForm";
import { RecoverPasswordModal } from "../Modals/RecoverPasswordModal";
import { TermsModal } from "../Modals/TermsModal";
import { useTranslation } from "react-i18next";

interface UserFormProps {
  isLogin?: boolean;
  isRegister?: boolean;
  isRecoverPassword?: boolean;
}

export function UserForm({
  isLogin,
  isRegister,
  isRecoverPassword,
}: UserFormProps) {
  const { t } = useTranslation();
  const [isGuardian, setIsGuardian] = useState(true);
  const [isBloodCenter, setIsBloodCenter] = useState(false);
  const [isRecoverModalOpen, setIsRecoverModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center mx-4 lg:mx-0">
      <div className="max-w-lg lg:w-2/5">
        {(isRegister || isLogin) &&
          <div className="justify-around flex mb-5">
            <ButtonUser isGuardian={isGuardian} label={t('buttons.guardian')} onChangeUser={() => { setIsGuardian(true), setIsBloodCenter(false) }} />
            <ButtonUser isBloodCenter={isBloodCenter} label={t('buttons.bloodCenter')} onChangeUser={() => { setIsGuardian(false), setIsBloodCenter(true) }} />
          </div>
        }

        <div className={`bg-white shadow lg:px-10 lg:py-7 px-6 py-4 h-fit rounded-3xl`}>
          {isRegister &&
            <>
              <RegisterForm isGuardian={isGuardian} onTermsModal={() => setIsTermsModalOpen(true)} />
              {isTermsModalOpen &&
              <TermsModal isOpen={isRegister} onClose={() => setIsTermsModalOpen(false)} />
              }
            </>
          }

          {isLogin &&
            <>
              <LoginForm isGuardian={isGuardian} onForgotPassword={() => setIsRecoverModalOpen(true)} />
              {isRecoverModalOpen &&
                <RecoverPasswordModal isOpen={isRecoverModalOpen} isGuardian={isGuardian} onClose={() => setIsRecoverModalOpen(false)} />
              }
            </>
          }

          {isRecoverPassword &&
            <RecoverPasswordForm isGuardian={isGuardian} />
          }
        </div>
      </div>
      {isLogin ? (
        <div className="text-center mt-3">
          <span>{t('forms.dontHaveAccount')}</span>
          <br />
          <a href="/register" className="text-sky-800 underline">
          {t('buttons.register')}
          </a>
        </div>
      ) : isRegister ? (
        <div className="text-center mt-3">
          <span>{t('forms.alredyHasAccount')}</span>
          <br />
          <a href="/login" className="text-sky-800 underline">
            {t('buttons.login')}
          </a>
        </div>
      ) : null}
    </div>
  );
}