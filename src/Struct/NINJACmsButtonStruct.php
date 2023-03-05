<?php declare(strict_types=1);

namespace NINJA\CmsBaseBundle\Struct;
use Shopware\Core\Framework\Struct\Struct;



class NINJACmsBaseBundle extends Struct
{
    /**
     * @var string|null
     */
    protected $content;

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): void
    {
        $this->content = $content;
    }

    public function getApiAlias(): string
    {
        return 'cms_text';
    }

}
