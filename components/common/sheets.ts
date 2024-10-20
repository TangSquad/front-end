import { registerSheet, SheetDefinition, ActionSheetRef } from 'react-native-actions-sheet';
import CertificateActionSheet from 'components/Auth/CertificateActionSheet';
import ImageActionSheet from 'components/Auth/ImageActionSheet';
 
registerSheet('certificate-sheet', CertificateActionSheet);
registerSheet('certificate-image-sheet', ImageActionSheet);
 
// We extend some of the types here to give us great intellisense
// across the app for all registered sheets.
declare module 'react-native-actions-sheet' {
  interface Sheets {
    'certificate-sheet': SheetDefinition<{
      payload: {
        type: 'organization';
        ref: React.RefObject<ActionSheetRef>;
        setSelectedOrganization: React.Dispatch<React.SetStateAction<{component: JSX.Element; id: number} | null>>;
      } | {
        type: 'level';
        ref: React.RefObject<ActionSheetRef>;
        setSelectedLevel: React.Dispatch<React.SetStateAction<{component: JSX.Element; id: number} | null>>;
        organizationId: number;
      };
    }>;
    'certificate-image-sheet': SheetDefinition<{
      payload: {
        ref: React.RefObject<ActionSheetRef>;
        setUri: React.Dispatch<React.SetStateAction<string>>;
      };
    }>;
  }
}
 
export {};