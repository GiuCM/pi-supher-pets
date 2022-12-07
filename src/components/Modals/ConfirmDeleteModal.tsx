import { Dialog } from "@headlessui/react";
import { Check, X } from "phosphor-react";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../context/UserContext";
import supherClient from "../../service/SupherClient";
import { ButtonAsync } from "../Buttons/ButtonAsync";

interface ConfirmDeleteModalProps {
  id?: string,
  itemDeleted: 'pet' | 'appointment' | 'alert' | 'guardian' | 'bloodCenter',
  isOpen: boolean,
  onClose: () => void,
}

export function ConfirmDeleteModal({ id, itemDeleted, isOpen, onClose }: ConfirmDeleteModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { deleteGuardian, deleteBloodCenter, deleteAlert, deleteAppointment, deletePet } = useContext(UserContext);
  const { t } = useTranslation();

  const onConfirmDelete = async () => {
    setIsLoading(true);
    try {
      switch (itemDeleted) {
        case 'alert':
          await deleteAlert(id!);
          break;
        case 'appointment':
          await deleteAppointment(id!);
          break;
        case 'pet':
          await deletePet(id!);
          break;
        default:
          const user = JSON.parse(localStorage.getItem("USERINFO")!)
          if ('cpf' in user) {
            await deleteGuardian(user.id)
          } else {
            await deleteBloodCenter(user.id)
          }
      }
    } finally {
      setIsLoading(false);
    }
  }

  const handleText = () => {
    if (itemDeleted === 'alert') {
      return t('forms.thisAlert')
    } else if (itemDeleted === 'appointment') {
      return t('forms.thisAppointment')
    } else if (itemDeleted === 'pet') {
      return t('forms.thisPet')
    } else {
      return t('forms.thisAccount')
    }
  }

  return (
    <Dialog open={isOpen} onClose={onClose} className="flex items-center justify-center">
      <div className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
            <Dialog.Description className="p-5 text-justify">
              <Dialog.Title className="font-semibold lg:text-2xl text-lg mb-5">{`${t('forms.sureYouWantToDelete')} ${handleText()}?`}</Dialog.Title>
              <div className="flex gap-4 w-full justify-end">
                <button onClick={onClose} className="flex items-center gap-1 hover:bg-red-100 mt-2 px-4 rounded-full">
                  <X color={'red'} size={20} />
                  {t('buttons.no')}
                </button>
                <ButtonAsync
                  type="button"
                  isLoading={isLoading}
                  disabled={isLoading}
                  onClick={() => onConfirmDelete()}
                  className="hover:bg-emerald-100 rounded-full h-10 w-fit mt-2 px-4 flex justify-center items-center gap-2 disabled:bg-gray-300 disabled:text-gray-700"
                >
                  <Check color={'green'} size={20} />
                  {t('buttons.yes')}
                </ButtonAsync>
              </div>
            </Dialog.Description>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}