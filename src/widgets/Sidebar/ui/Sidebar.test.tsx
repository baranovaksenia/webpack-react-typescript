import { fireEvent, screen } from '@testing-library/dom';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslations/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('with only first param', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        renderWithTranslation(<Sidebar />);
        // получаем кнопку
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        // передаем кнопку в fireEvent, на которую хотим нажать
        fireEvent.click(toggleBtn);
        // ожидаем что у sidebar появился класс collapsed
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
