import { Dialog } from "@headlessui/react";
import { Trans, useTranslation } from "react-i18next";

interface TermsModalProps {
  isOpen: boolean,
  onClose: () => void,
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  const { t } = useTranslation();

  return (
    <Dialog open={isOpen} onClose={onClose} className="flex items-center justify-center">
      <div className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-md rounded-2xl bg-white p-6">
            <Dialog.Title className="font-semibold text-2xl mb-5">{t('termsAndPolicy.termsAndPolicyTitle')}</Dialog.Title>
            <Dialog.Description className="flex flex-col justify-between">
              <h1 className="text-xl font-semibold">{t('termsAndPolicy.termsOnlyTitle')}</h1> <br />
              <Trans i18nKey={'termsAndPolicy.termsDescription'} /> <br />
              
              <h3 className="font-semibold text-lg">{t('termsAndPolicy.terms_1title')}</h3> <br />
              <Trans i18nKey={'termsAndPolicy.terms_1description'} /> <br />
              
              <h3 className="font-semibold text-lg">{t('termsAndPolicy.terms_2title')}</h3> <br />
              <Trans i18nKey={'termsAndPolicy.terms_2description'} /> <br />
              
              <h3 className="font-semibold text-lg">{t('termsAndPolicy.terms_3title')}</h3> <br />
              <Trans i18nKey={'termsAndPolicy.terms_3description'} /> <br />
              
              <h3 className="font-semibold text-lg">{t('termsAndPolicy.terms_4title')}</h3> <br />
              <Trans i18nKey={'termsAndPolicy.terms_4description'} /> <br />
              
              <h3 className="font-semibold text-lg">{t('termsAndPolicy.terms_5title')}</h3> <br />
              <Trans i18nKey={'termsAndPolicy.terms_5description'} /> <br />

              <h3 className="font-semibold text-lg">{t('termsAndPolicy.terms_6title')}</h3> <br />
              <Trans i18nKey={'termsAndPolicy.terms_6description'} /> <br />

              <h3 className="font-semibold text-lg">{t('termsAndPolicy.terms_7title')}</h3> <br />
              <Trans i18nKey={'termsAndPolicy.terms_7description'} /> <br />

              <h3 className="font-semibold text-lg">{t('termsAndPolicy.terms_8title')}</h3> <br />
              <Trans i18nKey={'termsAndPolicy.terms_8description'} /> <br />

              <h3 className="font-semibold text-lg">{t('termsAndPolicy.terms_9title')}</h3> <br />
              <Trans i18nKey={'termsAndPolicy.terms_9description'} /> <br />

              <h3 className="font-semibold text-lg">{t('termsAndPolicy.terms_10title')}</h3> <br />
              <Trans i18nKey={'termsAndPolicy.terms_10description'} /> <br />

              <h3 className="font-semibold text-lg">{t('termsAndPolicy.terms_11title')}</h3> <br />
              <Trans i18nKey={'termsAndPolicy.terms_11description'} /> <br />

              <h1 className="text-xl font-semibold">{t('termsAndPolicy.policyOnlyTitle')}</h1> <br />
              <Trans i18nKey={'termsAndPolicy.policyDescription'} /> <br />

              <h3 className="font-semibold text-lg">{t('termsAndPolicy.policy_1title')}</h3> <br />
              <Trans i18nKey={'termsAndPolicy.policy_1description'} /> <br />

              <h3 className="font-semibold text-lg">{t('termsAndPolicy.policy_2title')}</h3> <br />
              <Trans i18nKey={'termsAndPolicy.policy_2description'} /> <br />

              <h3 className="font-semibold text-lg">{t('termsAndPolicy.policy_3title')}</h3> <br />
              <Trans i18nKey={'termsAndPolicy.policy_3description'} /> <br />

              <h3 className="font-semibold text-lg">{t('termsAndPolicy.policy_4title')}</h3> <br />
              <Trans i18nKey={'termsAndPolicy.policy_4description'} /> <br />

              <h3 className="font-semibold text-lg">{t('termsAndPolicy.policy_5title')}</h3> <br />
              <Trans i18nKey={'termsAndPolicy.policy_5description'} /> <br />

              <h3 className="font-semibold text-lg">{t('termsAndPolicy.policy_6title')}</h3> <br />
              <Trans i18nKey={'termsAndPolicy.policy_6description'} /> <br />

              <h3 className="font-semibold text-lg">{t('termsAndPolicy.policy_7title')}</h3> <br />
              <Trans i18nKey={'termsAndPolicy.policy_7description'} /> <br />

              <div className="w-full flex justify-end mt-3">
                <a
                  onClick={onClose}
                  className="bg-sky-800 text-white hover:bg-sky-700 rounded-full h-10 w-fit px-4 flex justify-center items-center gap-2 disabled:bg-gray-300 disabled:text-gray-700"
                >
                  {t('buttons.close')}
                </a>
              </div>
            </Dialog.Description>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}